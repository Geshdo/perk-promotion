import {
  BubbleChatNotificationIcon,
  ComputerProgramming02Icon,
  Brain01Icon,
  WorkoutWarmUpIcon,
  ElearningExchangeIcon,
  UserGroupIcon,
  Activity03Icon,
  ViewOffSlashIcon,
  Target01Icon,
} from "hugeicons-react";

const ICON_SIZE = 60;

export const perksData = [
  {
    icon: (
      <ElearningExchangeIcon fill="#FFFFFF" color="#5e3a9d" size={ICON_SIZE} />
    ),
    title: "Education",
    description:
      "Your continued education is vital and you will have your own educational plan that you follow up on with your leader frequently to ensure that you are thriving with us.",
  },
  {
    icon: <Brain01Icon fill="#FFFFFF" color="#5e3a9d" size={ICON_SIZE} />,
    title: "Well-Being",
    description:
      "To take care of your mental health we will provide the possibility to talk to our career coach monthly, to unlock your full potential and ensure your well-being.",
  },
  {
    icon: <ViewOffSlashIcon fill="#FFFFFF" color="#5e3a9d" size={ICON_SIZE} />,
    title: "Transparency",
    description:
      "We are an open book, nothing is secret and anyone wanting to be part of the decision making process is welcomed with open arms.",
  },
  {
    icon: (
      <BubbleChatNotificationIcon
        fill="#FFFFFF"
        color="#5e3a9d"
        size={ICON_SIZE}
      />
    ),
    title: "Social Life",
    description:
      "The work-life balance is key to us. Meetings are during business hours, and overtime is something we always try to avoid.",
  },
  {
    icon: (
      <ComputerProgramming02Icon
        fill="#FFFFFF"
        color="#5e3a9d"
        size={ICON_SIZE}
      />
    ),
    title: "Gear",
    description:
      "You need the best tools to be the best, and we will provide you with everything you need to do your best work.",
  },

  {
    icon: <WorkoutWarmUpIcon fill="#FFFFFF" color="#5e3a9d" size={ICON_SIZE} />,
    title: "Exercise",
    description:
      "Are you into sports and think that the cost of golf balls or gymnastics socks are too expensive after you spent all your money on Bitcoin? Don't worry we will provide you with a wellness grant.",
  },

  {
    icon: <UserGroupIcon fill="#FFFFFF" color="#5e3a9d" size={ICON_SIZE} />,
    title: "Conferences",
    description:
      "We organize conferences two times a year where we spend time together to learn and to bond.",
  },
  {
    icon: <Activity03Icon fill="#FFFFFF" color="#5e3a9d" size={ICON_SIZE} />,
    title: "Activities",
    description:
      "We like spending time together and will therefore organize everything from traditional Aws to Hackathons, quizzes, game nights etc. regularly.",
  },

  {
    icon: <Target01Icon fill="#FFFFFF" color="#5e3a9d" size={ICON_SIZE} />,
    title: "Targeted Goals",
    description:
      "Outside of your education plan you also have targeted goals that you follow up on with your leader and coach regularly. Making sure that you can become the best version of you!",
  },
];
