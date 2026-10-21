// Starter set of women of Scripture for Day 1 of the trial.
// DRAFT: every pairing, verse excerpt, devotion and prayer is pending pastor review.
// Verses are NKJV.

export type Woman = {
  key: string;
  name: string;
  why: string; // one line shown on the reveal screen
  ref: string; // where her story is
  verse: { text: string; ref: string }; // Day 1 Scripture
  praise: string; // Day 1 praise line, spoken aloud
  title: string; // Day 1 devotion title
  devotion: string;
  prompt: string; // reflection question
  prayer: string;
};

export const women: Record<string, Woman> = {
  hagar: {
    key: "hagar",
    name: "Hagar",
    why: "Alone and overlooked in the wilderness, she discovered that God saw her, and she gave Him a name for it.",
    ref: "Genesis 16:1–13",
    verse: {
      text: "Then she called the name of the LORD who spoke to her, You-Are-the-God-Who-Sees; for she said, ‘Have I also here seen Him who sees me?’",
      ref: "Genesis 16:13",
    },
    praise: "You are the God who sees. You saw Hagar, and You see me.",
    title: "You are seen",
    devotion:
      "Hagar ran because no one seemed to see her. In the wilderness, God found her first. If you feel alone or far from Him today, He has not lost sight of you.",
    prompt: "Where do you most need to know that God sees you today?",
    prayer: "Lord, You are the God who sees me. Meet me right where I am today. Amen.",
  },
  hannah: {
    key: "hannah",
    name: "Hannah",
    why: "She poured out her whole heart to God, and walked away in peace before she saw the answer.",
    ref: "1 Samuel 1",
    verse: { text: "So the woman went her way and ate, and her face was no longer sad.", ref: "1 Samuel 1:18" },
    praise: "You hear every prayer. You heard Hannah, and You hear me.",
    title: "Peace before the answer",
    devotion:
      "Hannah prayed so honestly that others misunderstood her. God didn’t. She left His presence lighter, even before anything changed. You can bring Him the whole of what you’re carrying.",
    prompt: "What do you need to pour out to God, honestly, today?",
    prayer: "Lord, here is my whole heart. Give me Your peace while I wait. Amen.",
  },
  mary: {
    key: "mary",
    name: "Mary, the mother of Jesus",
    why: "With a full heart and a full life, she kept God’s words close and pondered them.",
    ref: "Luke 2:1–20",
    verse: { text: "But Mary kept all these things and pondered them in her heart.", ref: "Luke 2:19" },
    praise: "You are faithful in the small moments. You were with Mary, and You are with me.",
    title: "Treasure in the ordinary",
    devotion:
      "Mary’s days were full of a newborn’s needs, travel and strangers at the door. In the middle of it all, she kept God’s words close. Your time with Him doesn’t have to be long to be real.",
    prompt: "What is one moment this week you want to treasure with God?",
    prayer: "Lord, meet me in the full, ordinary moments of my day. Amen.",
  },
  ruth: {
    key: "ruth",
    name: "Ruth",
    why: "Her faithful love for the one in her care became part of God’s bigger story.",
    ref: "Ruth 1–4",
    verse: {
      text: "For wherever you go, I will go; and wherever you lodge, I will lodge; your people shall be my people, and your God, my God.",
      ref: "Ruth 1:16",
    },
    praise: "You are faithful to those who give themselves for others. You saw Ruth’s love, and You see mine.",
    title: "Faithful love",
    devotion:
      "Ruth chose to stay beside someone who needed her, even when it cost her. God saw every quiet act of care and wove it into His story. Your care for the people you love is not unseen.",
    prompt: "Where do you need God’s strength as you care for someone else?",
    prayer: "Lord, carry me as I carry them. Amen.",
  },
  naomi: {
    key: "naomi",
    name: "Naomi",
    why: "She spoke her grief honestly, and God was quietly at work in her loss.",
    ref: "Ruth 1–4",
    verse: { text: "And may he be to you a restorer of life and a nourisher of your old age.", ref: "Ruth 4:15" },
    praise: "You are the restorer of life. You did not leave Naomi alone, and You will not leave me.",
    title: "Honest grief",
    devotion:
      "Naomi didn’t hide her grief. God didn’t scold her for it. He kept working, quietly, until joy came back to her home. You can be honest with Him about what you’ve lost.",
    prompt: "What loss do you want to bring honestly to God today?",
    prayer: "Lord, You see what I’ve lost. Restore what only You can. Amen.",
  },
  martha: {
    key: "martha",
    name: "Martha",
    why: "She was invited to sit, not scolded, and Jesus called her by name.",
    ref: "Luke 10:38–42",
    verse: {
      text: "Martha, Martha, you are worried and troubled about many things. But one thing is needed, and Mary has chosen that good part, which will not be taken away from her.",
      ref: "Luke 10:41–42",
    },
    praise: "You are my peace. You called Martha by name, and You call me.",
    title: "The better seat",
    devotion:
      "Martha was serving Jesus and worn out doing it. He didn’t scold her; He invited her to sit. The good things in your life matter, and there is still a seat for you at His feet.",
    prompt: "What would it look like to sit with Him for a few minutes today?",
    prayer: "Lord, quiet my busy heart. Help me choose the better seat today. Amen.",
  },
  maryBethany: {
    key: "maryBethany",
    name: "Mary of Bethany",
    why: "She sat at Jesus’ feet and listened, choosing the one thing that would never be taken away.",
    ref: "Luke 10:38–42",
    verse: { text: "And she had a sister called Mary, who also sat at Jesus’ feet and heard His word.", ref: "Luke 10:39" },
    praise: "Your Word is life. Mary sat at Your feet, and so can I.",
    title: "Hungry for His Word",
    devotion:
      "Mary made time simply to listen. Jesus said she had chosen what would not be taken from her. Your hunger for more of Him is His invitation, not your burden.",
    prompt: "What do you hope to hear from God as you open His Word?",
    prayer: "Lord, speak, and help me listen. Amen.",
  },
  elizabeth: {
    key: "elizabeth",
    name: "Elizabeth",
    why: "God surprised her with a new calling later in life, when others thought her season was over.",
    ref: "Luke 1:5–45",
    verse: {
      text: "Blessed is she who believed, for there will be a fulfillment of those things which were told her from the Lord.",
      ref: "Luke 1:45",
    },
    praise: "You are mighty, and You remember. You remembered Elizabeth, and You remember me.",
    title: "A new chapter",
    devotion:
      "Elizabeth had waited a long time and stopped expecting anything new. Then God moved, in a quiet house, with no crowd watching. If you can’t see what’s next, you’re not forgotten. He still writes new chapters.",
    prompt: "Where do you need to hear that it isn’t too late?",
    prayer: "Lord, I don’t know the next step. Help me trust that You do. Amen.",
  },
  anna: {
    key: "anna",
    name: "Anna",
    why: "In her later years she stayed close to God in worship and prayer, and saw His promise fulfilled.",
    ref: "Luke 2:36–38",
    verse: { text: "Who did not depart from the temple, but served God with fastings and prayers night and day.", ref: "Luke 2:37" },
    praise: "You are worthy in every season of my life. Anna worshiped You for a lifetime, and so will I.",
    title: "A lifetime of worship",
    devotion:
      "Anna spent her later years close to God, and she was there when His promise arrived. No season of your life is too late to be full of Him.",
    prompt: "How would you like to spend this season close to God?",
    prayer: "Lord, let this season be full of You. Amen.",
  },
  lydia: {
    key: "lydia",
    name: "Lydia",
    why: "A working woman whose open heart and open home became a place for the gospel.",
    ref: "Acts 16:13–15",
    verse: { text: "The Lord opened her heart to heed the things spoken by Paul.", ref: "Acts 16:14" },
    praise: "You open hearts and homes. You opened Lydia’s, and You can open mine.",
    title: "An open heart, at work and at home",
    devotion:
      "Lydia ran a business and a household, and God met her right there by the river. Your work and your home can be places where He moves.",
    prompt: "Where do you want God to open your heart this week?",
    prayer: "Lord, open my heart, my work and my home to You. Amen.",
  },
  esther: {
    key: "esther",
    name: "Esther",
    why: "Placed somewhere new for a reason she couldn’t yet see, she prayed, trusted God and stepped forward.",
    ref: "Esther 4",
    verse: { text: "Yet who knows whether you have come to the kingdom for such a time as this?", ref: "Esther 4:14" },
    praise: "You are sovereign over every season. You placed Esther, and You place me.",
    title: "For such a time as this",
    devotion:
      "Esther didn’t choose where she ended up, and she couldn’t see the whole plan. She prayed, then took the next step. You don’t need the whole map, only the next faithful step.",
    prompt: "What next step do you need God’s wisdom for?",
    prayer: "Lord, show me the next step, and give me courage to take it. Amen.",
  },
  well: {
    key: "well",
    name: "The woman at the well",
    why: "Jesus met her with truth and dignity, not shame, and gave her a new beginning.",
    ref: "John 4:1–42",
    verse: { text: "Whoever drinks of the water that I shall give him will never thirst.", ref: "John 4:14" },
    praise: "You are living water. You met the woman at the well, and You meet me.",
    title: "Met with dignity",
    devotion:
      "Jesus went out of His way to meet a woman others avoided. He knew her whole story and offered her living water, not shame. He meets you the same way.",
    prompt: "What do you need Jesus to meet you in today?",
    prayer: "Lord, fill the empty places in me with Your living water. Amen.",
  },
  leah: {
    key: "leah",
    name: "Leah",
    why: "Overlooked in her own home, she turned her heart to praise, and God was with her.",
    ref: "Genesis 29:31–35",
    verse: { text: "And she conceived again and bore a son, and said, ‘Now I will praise the LORD.’", ref: "Genesis 29:35" },
    praise: "You see what others overlook. You saw Leah, and You see me.",
    title: "Now I will praise",
    devotion:
      "Leah longed to be loved at home and kept hoping things would change. In time she turned her eyes to the Lord and chose praise. God sees what you’re carrying in your home.",
    prompt: "What would it look like to praise God in the middle of what’s hard at home?",
    prayer: "Lord, You see my home and my heart. I will praise You. Amen.",
  },
  sarah: {
    key: "sarah",
    name: "Sarah",
    why: "She waited far longer than she hoped, and learned that nothing is too hard for the Lord.",
    ref: "Genesis 18:1–15; 21:1–7",
    verse: { text: "Is anything too hard for the LORD?", ref: "Genesis 18:14" },
    praise: "nothing is too hard for You. You kept Your promise to Sarah, and You are faithful to me.",
    title: "While you wait",
    devotion:
      "Sarah laughed because the promise sounded impossible. God kept it anyway, in His time. Waiting doesn’t mean He has forgotten you.",
    prompt: "What are you waiting on God for right now?",
    prayer: "Lord, strengthen my faith while I wait. Amen.",
  },
  zarephath: {
    key: "zarephath",
    name: "The widow of Zarephath",
    why: "With almost nothing left, she trusted God’s word, and her flour and oil did not run out.",
    ref: "1 Kings 17:8–16",
    verse: {
      text: "The bin of flour was not used up, nor did the jar of oil run dry, according to the word of the LORD which He spoke by Elijah.",
      ref: "1 Kings 17:16",
    },
    praise: "You are my provider. You provided for the widow of Zarephath, and You provide for me.",
    title: "Enough for today",
    devotion:
      "She had only enough for one last meal. God didn’t hand her a fortune; He gave her enough, day after day. Bring Him today’s need.",
    prompt: "What need do you want to trust God with today?",
    prayer: "Lord, give me what I need today, and peace for tomorrow. Amen.",
  },
  reached: {
    key: "reached",
    name: "The woman who reached for Jesus",
    why: "After years of suffering, she pushed through the crowd to touch Jesus, and He called her daughter.",
    ref: "Mark 5:25–34",
    verse: {
      text: "Daughter, your faith has made you well. Go in peace, and be healed of your affliction.",
      ref: "Mark 5:34",
    },
    praise: "You are my healer. You called her Daughter, and You call me Yours.",
    title: "Reaching for Him",
    devotion:
      "She had tried everything for twelve years. Still she reached for Jesus, and He stopped everything to see her. You can reach for Him in whatever you’re going through.",
    prompt: "What do you need to bring to Jesus today?",
    prayer: "Lord, I reach for You. Hold me in this. Amen.",
  },
  canaanite: {
    key: "canaanite",
    name: "The mother who wouldn’t give up",
    why: "She kept asking Jesus for her daughter’s sake, and He honored her great faith.",
    ref: "Matthew 15:21–28",
    verse: { text: "O woman, great is your faith! Let it be to you as you desire.", ref: "Matthew 15:28" },
    praise: "You hear a mother’s prayers. You heard her, and You hear me.",
    title: "A praying mother",
    devotion:
      "She didn’t stop praying for her child, even when it was hard. Jesus called her faith great. Your prayers for your children matter to Him.",
    prompt: "Which of your children do you want to bring to Jesus today?",
    prayer: "Lord, I place my child in Your hands. Amen.",
  },
  rahab: {
    key: "rahab",
    name: "Rahab",
    why: "Her past didn’t define her. Her faith in God gave her a new beginning and a place in His family.",
    ref: "Joshua 2; 6:22–25",
    verse: { text: "For the LORD your God, He is God in heaven above and on earth beneath.", ref: "Joshua 2:11" },
    praise: "You are God in heaven and on earth. You gave Rahab a new beginning, and You give me one.",
    title: "A new beginning",
    devotion:
      "Rahab’s story could have ended with her past. Instead her faith opened a new chapter, and God wrote her into His family. It isn’t too late for a fresh start.",
    prompt: "What new beginning are you asking God for?",
    prayer: "Lord, make all things new in me. Amen.",
  },
  magdalene: {
    key: "magdalene",
    name: "Mary Magdalene",
    why: "Jesus set her free, and in her tears at the empty tomb He called her by name.",
    ref: "John 20:1–18",
    verse: {
      text: "Jesus said to her, ‘Mary!’ She turned and said to Him, ‘Rabboni!’ (which is to say, Teacher).",
      ref: "John 20:16",
    },
    praise: "You are risen, and You know my name. You called Mary, and You call me.",
    title: "Called by name",
    devotion:
      "Mary came to the tomb in tears. Jesus spoke one word, her name, and everything changed. In your hurt and your questions, He knows your name.",
    prompt: "What would it mean to hear Jesus call your name today?",
    prayer: "Lord, speak my name, and help me hear You. Amen.",
  },
  miriam: {
    key: "miriam",
    name: "Miriam",
    why: "After God brought her through, she picked up her tambourine and led the women in praise.",
    ref: "Exodus 15:19–21",
    verse: { text: "Sing to the LORD, for He has triumphed gloriously!", ref: "Exodus 15:21" },
    praise: "You have triumphed gloriously. Miriam sang to You, and so will I.",
    title: "A song of thanks",
    devotion:
      "Miriam had seen hard years, and she didn’t let the good moment pass without praise. When you’re in a good place, gratitude keeps your heart close to Him.",
    prompt: "What good thing has God done that you want to thank Him for?",
    prayer: "Lord, thank You. Keep my heart grateful and close to You. Amen.",
  },
};
