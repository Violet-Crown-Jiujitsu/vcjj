<script setup>
const schedule = [
  {
    title: 'Mon',
    classes: [
      { title: 'Brazilian Jiu-Jitsu', instructor: 'Rudy', time: '7 - 8am', mTime: '07:00', pills: ['No Gi'] },
      {
        title: 'Brazilian Jiu-Jitsu',
        instructor: 'Rudy',
        time: '6:15pm - 7pm',
        mTime: '18:15',
        pills: ['Teen', 'No Gi'],
      },
      { title: 'Technique', instructor: 'Rudy', time: '7 - 7:30pm', mTime: '19:00', pills: ['No Gi'] },
      { title: '10 Rounds', instructor: 'Rudy', time: '7:30pm - 8:30pm', mTime: '19:30', pills: ['No Gi'] },
    ],
  },
  {
    title: 'Tues',
    classes: [
      { title: 'Brazilian Jiu-Jitsu', instructor: 'Tom', time: '7 - 8am', mTime: '07:00', pills: ['No Gi'] },
      { title: 'Takedowns', instructor: 'Noah', time: '6:30pm - 7pm', mTime: '18:30', pills: ['Wrestling'] },
      { title: 'Brazilian Jiu-Jitsu', instructor: 'Ryan H', time: '7 - 8pm', mTime: '19:00', pills: ['No Gi'] },
      {
        title: 'Breakjitsu',
        instructor: 'Rudy',
        time: '8pm - 8:30pm',
        mTime: '20:00',
        pills: ['All Ages', 'Breakdance'],
      },
    ],
  },
  {
    title: 'Wed',
    classes: [
      { title: 'Brazilian Jiu-Jitsu', instructor: 'Rudy', time: '12pm - 1pm', mTime: '12:00', pills: ['No Gi'] },
      { title: 'Muay Thai', instructor: 'Andrew', time: '6 - 7pm', mTime: '18:00', pills: ['Muay Thai'] },
      { title: 'Brazilian Jiu-Jitsu Basics', instructor: 'Rudy', time: '7 - 8pm', mTime: '19:00', pills: ['No Gi'] },
    ],
  },
  {
    title: 'Thurs',
    classes: [
      { title: 'Brazilian Jiu-Jitsu', instructor: 'Tom', time: '7 - 8am', mTime: '07:00', pills: ['No Gi'] },
      {
        title: 'Brazilian Jiu-Jitsu',
        instructor: 'Rudy',
        time: '6:15pm - 7pm',
        mTime: '18:15',
        pills: ['Teen', 'No Gi'],
      },
      {
        title: 'Brazilian Jiu-Jitsu',
        instructor: 'Rudy',
        time: '7pm - 7:40pm',
        mTime: '19:00',
        pills: ['Advanced', 'No Gi'],
      },
      { title: 'Competition Rounds', instructor: 'Rudy', time: '7:40pm - 8:30pm', mTime: '19:40', pills: ['No Gi'] },
    ],
  },
  {
    title: 'Fri',
    classes: [{ title: 'Open Mat', instructor: 'Rudy', time: '7pm - 8pm', mTime: '19:00', pills: ['No Gi'] }],
  },
  {
    title: 'Sat',
    classes: [
      { title: 'Gi Brazilian Jiu-Jitsu', instructor: 'Rudy', time: '11:15am - 12:00pm', mTime: '11:15', pills: ['Gi'] },
      { title: 'Brazilian Jiu-Jitsu ', instructor: 'Rudy', time: '12pm - 1pm', mTime: '12:00', pills: ['No Gi'] },
    ],
  },
  // {
  //   title: 'Sun'
  // },
]
const getPillClass = (pill) => pill.toLowerCase().split(' ').join('-')
</script>
<template>
  <div>
    <MetaTags title="Schedule | Violet Crown Jiu Jitsu" desc="View Our Schedule" />
    <SmallHeader title="Schedule" />
    <br />
    <ScheduleCta />
  </div>
</template>
