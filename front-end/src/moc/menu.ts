import { menu } from '@/layout/header/MenuList'

export const menus: menu[] = [
  {
    menuDepth: 1,
    menuName: 'VocManage',
    menuPath: '/voc-manage',
    componentPath: 'Voc',
    menuKey: 1,
    parentKey: 0,
    child: [
      {
        menuDepth: 2,
        menuName: 'VOC 관리',
        menuPath: '/voc-management',
        componentPath: 'voc-manage/Voc',
        menuKey: 1001,
        parentKey: 2,
      },
      {
        menuDepth: 2,
        menuName: '요청자 DashBoard',
        menuPath: '/dashboard',
        componentPath: 'voc-manage/DashboardCustomer',
        menuKey: 1002,
        parentKey: 2,
      },
      {
        menuDepth: 2,
        menuName: '담당자 DashBoard',
        menuPath: '/dashboard',
        componentPath: 'voc-manage/DashboardPersonInCharge',
        menuKey: 1003,
        parentKey: 2,
      },
      /*{
        menuDepth: 2,
        menuName: 'System 관리',
        menuPath: '/system-management',
        componentPath: 'voc-manage/SystemManagement',
        menuKey: 1004,
        parentKey: 2,
      },*/
    ],
  },
  {
    menuDepth: 1,
    menuName: 'VocReport',
    menuPath: '/',
    componentPath: '/Voc',
    menuKey: 2,
    parentKey: 0,
    child: [
      {
        menuDepth: 2,
        menuName: '요구사항 처리현황',
        menuPath: '/requirements-processing-status',
        componentPath: 'voc-report/RequirementsProcessingStatus',
        menuKey: 2001,
        parentKey: 2,
      },
      {
        menuDepth: 2,
        menuName: '월별 처리현황(고객사별)',
        menuPath: '/montly-processing-status/customer',
        componentPath: 'voc-report/RequirementsByMontlyCustomer',
        menuKey: 2002,
        parentKey: 2,
      },
      /*{
        menuDepth: 2,
        menuName: '월별 처리현황(담당자별)',
        menuPath: '/montly-processing-status/developer',
        componentPath: 'voc-report/RequirementsByMontlyDeveloper',
        menuKey: 2002,
        parentKey: 2,
      },*/
    ],
  },
]
