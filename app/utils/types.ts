export interface wedding {
  groom: {
    shortName: string;
    fullName: string;
    fullNameWithTitle: string;
    fatherName: string;
    motherName: string;
    orderInFamily: string;
    instagram?: string;
    bank?: string;
    noRek?: string;
  };
  bride: {
    shortName: string;
    fullName: string;
    fullNameWithTitle: string;
    fatherName: string;
    motherName: string;
    orderInFamily: string;
    instagram?: string;
    bank?: string;
    noRek?: string;
  };
  quotes: {
    quote1: string;
    quote1From: string;
    quote2?: string;
    quote2From?: string;
  };
  akad: {
    time: string;
    date: string;
    place: string;
    liveLink?: string;
  };
  resepsi: {
    time: string;
    date: string;
    place: string;
    mapsLink?: string;
  };
  loveStory: {
    loveStoryActived: boolean;
    firstMeet?: string;
    theProposal?: string;
    marriage?: string;
  };
  imageUrl: {
    groomImg?: string;
    brideImg?: string;
    img1?: string;
    img2?: string;
    img3?: string;
    img4?: string;
    img5?: string;
    img6?: string;
  };
  _id?: string;
  path?: string;
  isActive?: boolean;
  category: string;
  createdAt: Date;
}

export interface Props {
  data: wedding;
}
