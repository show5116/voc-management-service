package com.vms.server.domain.entity.qms;

import javax.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Getter
@NoArgsConstructor
@ToString
@Entity
@EntityListeners(AuditingEntityListener.class)
@Table(name = "QMS_MAT_HISTORY_BACKUP")
public class QmsMatHistoryBackup {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(name = "PLANT")
  public String plant;
  @Column(name = "MAT_LOT_NUMBER")
  public String matLotNumber;
  @Column(name = "SYS_TRANS_TIME")
  public String sysTransTime;
  @Column(name = "TRANS_TIME")
  public String transTime;
  @Column(name = "LOT_HST_SEQ")
  public String lotHstSeq;
  @Column(name = "TRANSACTION")
  public String transaction;
  @Column(name = "MAT_CATEGORY")
  public String matCategory;
  @Column(name = "MAT_CODE")
  public String matCode;
  @Column(name = "BIB_NO")
  public String bibNo;
  @Column(name = "SUBC_CODE_OLD")
  public String subcCodeOld;
  @Column(name = "SUBC_CODE_NEW")
  public String subcCodeNew;
  @Column(name = "QTY_OLD")
  public String qtyOld;
  @Column(name = "QTY_NEW")
  public String qtyNew;
  @Column(name = "UNIT_PRICE")
  public String unitPrice;
  @Column(name = "CREATION_TIME")
  public String creationTime;
  @Column(name = "CREATION_SUBC")
  public String creationSubc;
  @Column(name = "STATUS_OLD")
  public String statusOld;
  @Column(name = "STATUS_NEW")
  public String statusNew;
  @Column(name = "SYSTEM_NAME")
  public String systemName;
  @Column(name = "QMS_NUMBER")
  public String qmsNumber;
  @Column(name = "REVISION_NO")
  public String revisionNo;
  @Column(name = "SEQ")
  public String seq;
}
