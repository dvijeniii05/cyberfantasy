import i18next from "i18next";

export const KnownIssuesData = [
  {
    key: 0,
    text: i18next.t('knownType_DrySkin_text') ,
    value: 'dry%20skin'
  },
  {
    key: 1,
    text:"Oily skin - your face can get shiny as the day progresses. Pores may be more visible and are more likely to suffer acne breakouts.",
    value: 'oily%20skin'
  },
  {
    key: 2,
    text: "Combined skin - can be dry or normal in some areas, but oily in others, like the T-zone.",
    value: 'combination%20skin'
  },
  {
    key: 3,
    text: "Normal skin - regular texture, no or few imperfections and a soft appearance. Well-balanced.",
    value: 'normal%20skin'
  },
  {
    key: 4,
    text: "Aging skin - looks thinner, paler and clear. Pigmented spots may appear in sun-exposed areas.",
    value: 'anti%20aging'
  },
];
