import {StackNavigationProp} from '@react-navigation/stack';
import {DataProps} from '../redux/slices/productsSlice';

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
  ItemInfo: {
    props: DataProps;
  };
};

export type TabParams = {
  Home: undefined;
  Account: undefined;
  Browse: undefined;
  PersonalCard: undefined;
};

export type TabProps = StackNavigationProp<TabParams>;
export type StackProps = StackNavigationProp<StackParams>;
