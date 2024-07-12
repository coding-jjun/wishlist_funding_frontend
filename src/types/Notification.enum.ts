export enum NotiType {
  IncomingFollow = "IncomingFollow", // 들어오는 친구 요청
  AcceptFollow = "AcceptFollow", // 내 요청에 대한 친구의 수락
  FundClose = "FundClose", // 내 펀딩 마감
  FundAchieve = "FundAchieve", // 내 펀딩 달성
  NewDonate = "NewDonate", // 내 펀딩에 들어온 새로운 후원
  WriteGratitude = "WriteGratitude", // 감사인사 작성 권유
  NewComment = "NewComment", // 댓글 알림
  DonatedFundClose = "DonatedFundClose",
  CheckGratitude = "CheckGratitude", // 내가 후원한 펀딩 감사인사 확인
}

export enum ReqType {
  // NotiType이 IncomingFollow인 경우
  NotResponse = "00", // 요청에 응답하지 않은 상태
  Accept = "01", // 요청을 수락한 상태
  Refuse = "02", // 요청을 거절한 상태

  // NotiType이 WriteGratitude인 경우
  UnWritten = "03", // 감사인사를 작성하지 않은 상태
  Written = "04", // 감사인사를 작성한 상태
}

export const NotificationMessages: Record<NotiType, string> = {
  [NotiType.IncomingFollow]: "님이 친구를 신청했어요",
  [NotiType.AcceptFollow]: "님이 친구요청을 수락했어요",
  [NotiType.FundClose]: " 내가 후원한 펀딩이 마감되었어요",
  [NotiType.FundAchieve]: "내가 올린 펀딩이 목표 금액을 달성했어요!",
  [NotiType.NewDonate]: " 님이 참여했어요!",
  [NotiType.WriteGratitude]:
    " ${작성자}님, 선물에 대한 감사인사를 작성해보세요",
  [NotiType.NewComment]: " 님이 댓글을 남겼어요!",
  [NotiType.DonatedFundClose]: " 님의 펀딩이 마감되었어요",
  [NotiType.CheckGratitude]: " 님이 감사인사를 작성했어요",
};
