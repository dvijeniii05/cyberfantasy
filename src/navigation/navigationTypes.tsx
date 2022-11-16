import {StackNavigationProp} from '@react-navigation/stack';

export type StackParams = {
  BottomTab: {
    Screen: string;
  };
  SignUp: undefined;
  Landing: undefined;
  Questionnaire: undefined;
  SignIn: undefined;
  KnownTypePick: undefined;
  AdditionalQuestions: undefined;
  InitialPick: undefined;
};

export type TabParams = {
  Home: undefined;
  Account: undefined;
  Browse: undefined;
  PersonalCard: undefined;
  ItemModal: {
    Screen: string;
  };
};

export type ModalParams = {
  ItemInfo: undefined;
};

export type TabProps = StackNavigationProp<TabParams>;
export type StackProps = StackNavigationProp<StackParams>;
