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
    <section id="schedule">
      <div class="week">
        <div class="day" v-for="(day, i) in schedule" :key="i">
          <div class="header-wrap">
            <h2>{{ day.title }}</h2>
          </div>
          <div class="classes" v-if="day.classes">
            <div class="class" v-for="(clas, j) in day.classes">
              <div class="info">
                <div class="top">
                  <h3>{{ clas.title }}</h3>
                  <time :datetime="clas.mTime"> {{ clas.time }}</time>
                </div>
              </div>
              <div class="bottom">
                <div class="pills" v-if="clas.pills">
                  <div class="pill" :class="getPillClass(pill)" v-for="(pill, k) in clas.pills" :key="k">
                    {{ pill }}
                  </div>
                </div>
                <p class="instructor">Instructor: {{ clas.instructor }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style lang="scss" scoped>
section {
  clear: both;
  padding: 3rem 2rem;
}

.week {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(31%, 1fr));
  gap: 3rem;

  .day {
    // display: flex;

    // background: linear-gradient(to top right, #8162CE, #F54BA5);
    padding: 1rem;

    .header-wrap {
      text-transform: capitalize;
      text-align: center;
    }

    h2 {
      font-size: 28px;
      align-self: center;
      background: white;
      border-radius: 50%;
    }

    .classes {
      padding-left: 1rem;

      .class {
        width: 100%;
        padding: 1rem 0;
        display: flex;
        flex-direction: column;
        border-bottom: 1px solid #ccc;

        .info {
          .top {
            display: flex;
            justify-content: space-between;
            align-items: center;

            h3 {
              font-size: 18px;
              line-height: 1;
              margin: 0;
            }
          }
        }

        .bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 1rem;

          .instructor {
            font-size: 12px;
          }

          .pills {
            display: flex;

            .pill {
              margin-right: 1rem;
              // border: 1px solid rgb(205, 205, 205);
              border-radius: 50px;
              padding: 3px 8px;
              font-size: 11px;
              font-weight: bold;
              letter-spacing: 0.8px;
              color: white;

              &:last-of-type {
                margin-right: 0;
              }

              &.advanced {
                background: $purple-1;
              }

              &.gi {
                background: $yellow-1;
              }

              &.muay-thai {
                background: $purple-5;
              }

              &.no-gi {
                background: $purple-3;
              }

              &.teen {
                background: $blue-5;
              }

              &.wrestling {
                background: $pink-3;
              }
            }
          }
        }
      }
    }
  }
}
</style>
