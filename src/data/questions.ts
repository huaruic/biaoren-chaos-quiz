export interface Option {
  id: string;
  text: string;
  label: string;
  scores: Record<string, number>;
}

export interface Question {
  id: number;
  chapter: string;
  title: string;
  scene: string;
  narration: string;
  question: string;
  options: Option[];
}

export const questions: Question[] = [
  {
    id: 1,
    chapter: "序章",
    title: "风起",
    scene: "昏暗的房间，窗外是萧瑟的荒野。",
    narration: "大业十三年。天子南巡，四海沸腾，白骨蔽于野，千里无鸡鸣。你蜷缩在残破的屋中，门外是马蹄与哀嚎交织的乱响。你攥紧了拳头——",
    question: "面对门外的混乱，你选择：",
    options: [
      {
        id: "A",
        text: "紧闭门窗，藏好仅存的粮食，等待乱兵过去。",
        label: "生存·谨慎",
        scores: { "阿育娅": 1, "谛听/老莫": 1 }
      },
      {
        id: "B",
        text: "拿起唯一的柴刀，守在门口，保护家人。",
        label: "守护·勇气",
        scores: { "刀马": 2 }
      },
      {
        id: "C",
        text: "从后门溜走，去寻找传说中反抗朝廷的义军。",
        label: "反抗·理想",
        scores: { "知世郎": 2 }
      }
    ]
  },
  {
    id: 2,
    chapter: "第一幕",
    title: "入世",
    scene: "逃亡路上，黄沙漫天。",
    narration: "你离开了故土，踏上了前途未卜的旅程。黄沙弥漫的岔路口，两拨人各立一方——一边是护送妇孺的阿育娅商队，驼铃声声，步履蹒跚；另一边是独来独往、浑身是血的侠客刀马，他的眼神像一柄未出鞘的刀。",
    question: "你选择：",
    options: [
      {
        id: "A",
        text: "加入商队，人多力量大，或许能更安全地到达目的地。",
        label: "协作·求生",
        scores: { "阿育娅": 2 }
      },
      {
        id: "B",
        text: "跟着刀马，乱世之中，只有强者才能生存。",
        label: "力量·目标",
        scores: { "刀马": 2 }
      },
      {
        id: "C",
        text: "谁也不跟，自己的路自己走，不把命运交到他人手中。",
        label: "独立·自由",
        scores: { "谛听/老莫": 2 }
      }
    ]
  },
  {
    id: 3,
    chapter: "第二幕",
    title: "闻道",
    scene: "破败的驿站，人声窃窃。",
    narration: "你在驿站歇脚，听到了关于「知世郎」的传说——有人说他是救世主，也有人说他是疯子。忽然，一个戴着面具的人跃上高台，振臂高呼：「天下人，苦则反，有何不对！」驿站里一阵骚动。",
    question: "听到知世郎的宣言，你的内心：",
    options: [
      {
        id: "A",
        text: "热血沸腾——这正是我辈心声！他的话点燃了你胸中的火。",
        label: "理想·感染",
        scores: { "知世郎": 2 }
      },
      {
        id: "B",
        text: "心有戚戚，但你看到了远处官兵的旗帜，默默退入人群。",
        label: "谨慎·隐忍",
        scores: { "阿育娅": 1, "谛听/老莫": 1 }
      },
      {
        id: "C",
        text: "面具之下是谁？真正的领袖，不会如此轻易抛头露面。",
        label: "审慎·洞察",
        scores: { "谛听/老莫": 2 }
      }
    ]
  },
  {
    id: 4,
    chapter: "第三幕",
    title: "歧路",
    scene: "夜晚的密林，火光摇曳。",
    narration: "你因故卷入了一场纷争。火光映出两张面孔：一方是声称替天行道、手段狠辣的燕子娘，她的规矩如铁；另一方是温文尔雅、眼神冰冷的玉面鬼，他的微笑藏着算计。他们都向你伸出了手。",
    question: "他们都向你展示了某种「力量」，你更倾向于：",
    options: [
      {
        id: "A",
        text: "燕子娘的「规矩」——虽然残酷，但乱世需用重典。",
        label: "秩序·力量",
        scores: { "燕子娘": 2 }
      },
      {
        id: "B",
        text: "玉面鬼的「谋略」——借力打力，用最小代价换最大利益。",
        label: "智谋·野心",
        scores: { "玉面鬼": 2 }
      },
      {
        id: "C",
        text: "两者都非善类，敬而远之，想办法脱身。",
        label: "道义·中立",
        scores: { "刀马": 1, "阿育娅": 1 }
      }
    ]
  },
  {
    id: 5,
    chapter: "第四幕",
    title: "抉择",
    scene: "月色如霜，你手中握着一份密信。",
    narration: "你获得了一份关于朝廷运往边塞的「秘宝」的情报——据说足以改变战局。这张薄纸，比刀剑更沉重。你可以用它换取财富，交给义军，或者……",
    question: "你会如何处理这份情报？",
    options: [
      {
        id: "A",
        text: "卖给出价最高的势力，先让自己活下来再说。",
        label: "利己·现实",
        scores: { "谛听/老莫": 2 }
      },
      {
        id: "B",
        text: "交给知世郎的反抗军，希望能为天下带来改变。",
        label: "理想·奉献",
        scores: { "知世郎": 2 }
      },
      {
        id: "C",
        text: "毁掉情报——神仙打架，凡人遭殃，不愿再卷入是非。",
        label: "避世·和平",
        scores: { "阿育娅": 2 }
      }
    ]
  },
  {
    id: 6,
    chapter: "终章",
    title: "立道",
    scene: "黎明前，远方城池的轮廓隐约可见。",
    narration: "你走过了荒野与密林，见过了英雄与枭雄。此刻，你站在一座城池的废墟之上，回望来路——烽烟、岔路、高台、密林、月色，一切历历在目。前方是一片等待重建的天地。你问自己——",
    question: "若这乱世终有尽时，你希望留下什么？",
    options: [
      {
        id: "A",
        text: "一套铁律，让后人不再重蹈覆辙。规矩，才是长治久安之本。",
        label: "秩序·规则",
        scores: { "燕子娘": 2 }
      },
      {
        id: "B",
        text: "一段传奇，让后人知道在最黑暗的时代，有人不曾屈服。",
        label: "名望·影响",
        scores: { "玉面鬼": 2 }
      },
      {
        id: "C",
        text: "什么都不必留。若途中守护过一人、温暖过一心，便已足够。",
        label: "守护·淡泊",
        scores: { "刀马": 2 }
      }
    ]
  }
];
