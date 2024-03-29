import {
  useState,
  useEffect,
  useRef,
  memo,
  forwardRef,
  useImperativeHandle,
} from 'react'

import IbsCombobox, { IbsComboboxHandle } from '@components/common/IbsCombobox'
import IbsTextField, {
  IbsTextFieldHandle,
} from '@components/common/IbsTextField'
import IbsDatePicker, {
  IbsDatePickerHandel,
} from '@components/common/IbsDatePicker'
import IbsEditor from '@components/common/IbsEditor'
import IbsAttachment from '@components/common/IbsAttachment'

import { colors } from '@components/styles/colors'
import ibsAxios from '@/utils/ibsAxios'
import { daysFromToday, vocBaseFormat } from '@/utils/dateUtils'

interface VocRegistrationProps {}

export type VocRegistrationHandle = {
  getFormData: () => object
}

const VocRegistration = forwardRef<VocRegistrationHandle, VocRegistrationProps>(
  (vocRegistrationProps, ref) => {
    useImperativeHandle(ref, () => ({
      getFormData,
    }))

    const [content, setContent] = useState('')
    const [files, setFiles] = useState<File[]>([])

    const refs = {
      requestKindCombo: useRef<IbsComboboxHandle>(null),
      importanceCombo: useRef<IbsComboboxHandle>(null),
      systemCombo: useRef<IbsComboboxHandle>(null),
      plantCombo: useRef<IbsComboboxHandle>(null),
      personInChargeCombo: useRef<IbsComboboxHandle>(null),
      menuText: useRef<IbsTextFieldHandle>(null),
      deliveryRequestDate: useRef<IbsDatePickerHandel>(null),
    }

    useEffect(() => {
      ibsAxios.get('/combo-box/system-name').then((response: any) => {
        refs.systemCombo.current!.setItems(response.data)
      })
      ibsAxios.get('/combo-box/plant').then((response: any) => {
        refs.plantCombo.current!.setItems(response.data)
      })
      ibsAxios.get('/combo-box/person-in-charge').then((response: any) => {
        refs.personInChargeCombo.current!.setItems(response.data)
      })
    }, [])

    const getFormData = () => {
      const formData = new FormData()
      formData.append(
        'systemName',
        refs.systemCombo.current!.getSelectedValues()[0],
      )
      formData.append('plant', refs.plantCombo.current!.getSelectedValues()[0])
      formData.append('revisionNo', '1')
      formData.append('receptionDept', '')
      formData.append(
        'requiredResponseDate',
        vocBaseFormat(refs.deliveryRequestDate.current!.getDate().startDate),
      )
      formData.append(
        'personInCharge',
        refs.personInChargeCombo.current!.getSelectedValues()[0],
      )
      formData.append('requirement', content)
      for (let i = 0; i < files.length; i++) {
        formData.append('files', files[i])
      }
      //formData.append('menu', refs.menuText.current!.getValue())
      formData.append(
        'remark',
        refs.importanceCombo.current!.getSelectedValues()[0],
      )
      formData.append(
        'classification',
        refs.requestKindCombo.current!.getSelectedValues()[0],
      )

      //requestKind: refs.requestKindCombo.current!.getSelectedValues()[0],

      return formData
    }

    return (
      <>
        <IbsCombobox
          ref={refs.requestKindCombo}
          label='요청종류'
          width='130px'
          formControllStyle={{ marginRight: '10px' }}
          defaultItems={[
            { value: 'new', displayValue: '신규', color: `${colors.yellow}` },
            { value: 'error', displayValue: '오류', color: `${colors.red}` },
            {
              value: 'improvement',
              displayValue: '개선',
              color: `${colors.green}`,
            },
          ]}
          required
        />
        <IbsCombobox
          ref={refs.systemCombo}
          label='System'
          width='150px'
          formControllStyle={{ marginRight: '10px' }}
          defaultItems={[{ displayValue: '', value: '' }]}
          required
        />
        <IbsCombobox
          ref={refs.plantCombo}
          label='Plant'
          width='150px'
          formControllStyle={{ marginRight: '10px' }}
          defaultItems={[{ displayValue: '', value: '' }]}
          required
        />
        <IbsTextField
          ref={refs.menuText}
          label='메뉴'
          formControllStyle={{ marginRight: '10px' }}
        />
        <IbsDatePicker
          ref={refs.deliveryRequestDate}
          label='납기 요청일'
          formControllStyle={{ marginRight: '10px' }}
          startDate={daysFromToday(7)}
        />
        <IbsCombobox
          ref={refs.importanceCombo}
          label='중요도'
          width='130px'
          formControllStyle={{ marginRight: '10px' }}
          defaultItems={[
            {
              value: 'emergency',
              displayValue: '긴급',
              color: `${colors.red}`,
            },
            {
              value: 'fast',
              displayValue: '빠름',
              color: `${colors.yellow}`,
            },
            { value: 'normal', displayValue: '보통', color: `${colors.green}` },
          ]}
        />
        <IbsCombobox
          ref={refs.personInChargeCombo}
          label='담당자'
          formControllStyle={{ marginRight: '10px' }}
          defaultItems={[{ displayValue: '', value: '' }]}
        />
        <br />
        <br />
        <IbsEditor
          width='800px'
          height='300px'
          content={content}
          setContent={setContent}
        />
        <br />
        <IbsAttachment files={files} multiple={true} setFiles={setFiles} />
      </>
    )
  },
)

export default memo(VocRegistration)
