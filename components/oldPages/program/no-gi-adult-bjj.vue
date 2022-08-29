<script setup>
import Review from '../../components/home/review.vue'
const faqs = [
  {
    title: ' Do I need to know jiu-jitsu or Judo to study Brazilian Jiu Jitsu?',
    content: `<p>
                No, you don't. There are beginner classes available and many of the people who study Brazilian Jiu Jitsu
                have no prior martial arts training.
              </p>`,
  },
  {
    title: 'Can Brazilian Jiu Jitsu help me defend myself?',
    content: `<p>
                Absolutely. It's one of the world's most effective self-defense techniques and is often preferred
                because it teaches students to leverage their body weight to defeat larger opponents.
              </p>`,
  },
  {
    title: 'Do I need any special equipment to study Brazilian Jiu Jitsu?',
    content: `<p>Students typically wear a Gi (two-piece garment worn by martial artists.) It is also typical for some
                students may want to wear a mouth guard. It's a good idea to have a supply of athletic tape, as well.</p>`,
  },
  {
    title: 'Will taking Brazilian Jiu Jitsu classes help me lose weight?',
    content: `<p>
                It can, particularly if you combine Brazilian Jiu Jitsu classes with a healthy diet and lifestyle.
                Brazilian Jiu Jitsu provides a great, full-body workout that burns calories, builds muscles, and boosts
                the metabolism.
              </p>`,
  },
  {
    title: 'As a beginner, do I need to spar?',
    content: `<p>No. Beginner classes focus on teaching basic techniques and safety, and you can then work your way up to
                controlled sparring in class.</p>`,
  },
]
</script>
<template>
  <div>
    <MetaTags
      title="No Gi Adult BJJ | Violet Crown Jiu Jitsu"
      desc="Our Austin BJJ classes are designed to help people of any size defend themselves and get into the best shape of their lives!"
    />
    <section id="hero" class="module banner banner-program all dark-font capitalize-font fixed header-normal">
      <div class="banner-bg cover"></div>
      <div class="container">
        <div class="left-text">
          <div data-aos="fade-right" class="aos-init aos-animate">
            <span class="left-text-small-header">Learn to Fight and Defend Yourself in a Fun Setting</span>
            <h1 class="left-text-large-header">
              Get in Shape and Harness Your Body's Capabilities with Brazilian Jiu Jitsu
            </h1>
            <p>
              Brazilian Jiu Jitsu is a martial art and fighting technique that is designed to help people of any size
              defend themselves. It's also a terrific way to tone and firm your body and reap the health benefits of
              martial arts.
            </p>
          </div>
        </div>
        <div class="cutout aos-init aos-animate" data-aos="fade-left"></div>
      </div>
    </section>

    <section id="dealing-cta" class="module content-columns dark-font p-t- p-b- bg-grey">
      <div class="container font-left">
        <div class="module-header aos-init aos-animate" data-aos="fade-down">
          <div class="content-sub-header">ARE YOU DEALING WITH</div>
          <h2>ANY OF THESE TROUBLES?</h2>
        </div>
        <div class="columns three-columns aos-init aos-animate" data-aos="fade-up">
          <div class="indiv-column">
            <p>Do you want to lose weight and tone your muscles?</p>
          </div>
          <div class="indiv-column">
            <p>Do you want to feel prepared to defend yourself if you need to?</p>
          </div>
          <div class="indiv-column">
            <p>Are you ready to feel new levels of self-confidence and pride?</p>
          </div>
        </div>
      </div>
    </section>

    <section id="section-1" class="module content-left-half-full-bleed all dark-font">
      <div class="content-right"></div>
      <div class="container">
        <div class="content-left aos-init aos-animate" data-aos="fade-right">
          <div class="content-sub-header">TRY SOMETHING DIFFERENT FROM THE SAME OLD ROUTINE</div>
          <h2 class="module-title">GETTING IN SHAPE IS IMPORTANT FOR PEOPLE OF ALL AGES AND SIZES</h2>
          <p>
            Studying martial arts provides you with a physical challenge combined with a mental one - and teaches you to
            defend yourself, too.
          </p>
          <p>
            Brazilian Jiu Jitsu is a unique form of martial arts that teaches students to leverage their body weight to
            use in the ring or against an attacker. A descendant of Judo, Brazilian Jiu Jitsu is both a sport and a
            martial art - and it's fun to learn.
          </p>
        </div>
      </div>
    </section>

    <section
      id="results-cta"
      class="module content-centered all light-font normal-font parallax p-t-large p-b-large cover"
    >
      <div class="container">
        <div class="content-centered-container font-center aos-init" data-aos="fade-down">
          <div class="content-sub-header"></div>
          <h2>RESULTS AND GROWTH WITH EVERY CLASS!</h2>
          <p>
            Studying Brazilian Jiu Jitsu can help you get in the best shape of your life. It's a great way to lose
            weight, tone your muscles, and learn the key things you need to know to be able to defend yourself - even
            against an opponent who's larger than you are.
          </p>
        </div>
      </div>
    </section>

    <section id="section-2" class="module content-left-half-full-bleed all dark-font">
      <div class="content-right"></div>
      <div class="container">
        <div class="content-left aos-init aos-animate" data-aos="fade-right">
          <div class="content-sub-header"></div>
          <h2 class="module-title">BRAZILIAN JIU JITSU BUILDS MUSCLE AND MAXIMIZES PHYSICAL FITNESS</h2>
          <p>
            Brazilian Jiu Jitsu provides an intense, full-body workout that's the perfect way to lose weight, increase
            your muscle mass, and get into great shape.
          </p>
          <p>
            By combining cardiovascular training with toning and training, Brazilian Jiu Jitsu students push their
            bodies hard and learn what they are capable of.
          </p>
          <p>
            It's a great way to burn calories in a fun and supportive setting that encourages all students to do their
            best.
          </p>
        </div>
      </div>
    </section>

    <section id="section-3" class="module content-right-half-full-bleed all dark-font">
      <div class="content-left"></div>
      <div class="container">
        <div class="content-right aos-init aos-animate" data-aos="fade-left">
          <div class="content-sub-header"></div>
          <h2 class="module-title">BRAZILIAN JIU JITSU TEACHES PRACTICAL SELF-DEFENSE TECHNIQUES</h2>
          <p>
            The thought of having to defend yourself against a bigger, stronger assailant might be scary, but Brazilian
            Jiu Jitsu is designed to help you overcome your fears.
          </p>
          <p>
            By teaching students to take the fight to the ground where they can use chokeholds and other effective
            techniques to defend themselves, Brazilian Jiu Jitsu helps leverage even a small body into a huge problem
            for an attacker.
          </p>
          <p>
            Best of all, Brazilian Jiu Jitsu builds strength and agility, both of which help in self-defense situations.
          </p>
        </div>
      </div>
    </section>

    <section id="section-4" class="module content-left-half-full-bleed all dark-font">
      <div class="content-right"></div>
      <div class="container">
        <div class="content-left aos-init" data-aos="fade-right">
          <div class="content-sub-header"></div>
          <h2 class="module-title">BRAZILIAN JIU JITSU STUDENTS WALK WITH CONFIDENCE AND PRIDE</h2>
          <p>
            There's no feeling quite like the feeling of knowing that your body is strong, agile, and able to do
            whatever you want it to do.
          </p>
          <p>
            Studying Brazilian Jiu Jitsu gives students the knowledge that they can leverage their body's strength to
            accomplish things they never thought possible.
          </p>
          <p>
            Over time, it increases self-confidence and pride - and that carries over to work, home, and every area of
            your personal life.
          </p>
        </div>
      </div>
    </section>

    <section id="section-5" class="module content-right-half-full-bleed all dark-font bg-grey">
      <div class="content-left"></div>
      <div class="container">
        <div class="content-right aos-init" data-aos="fade-left">
          <div class="content-sub-header"></div>
          <h2 class="module-title">BRAZILIAN JIU JITSU COMPETITIONS PROVIDE A UNIQUE CHALLENGE</h2>
          <p>
            Students who have a natural competitive drive love Brazilian Jiu Jitsu because it's a sport as well as a
            self-defense method.
          </p>
          <p>
            Brazilian Jiu Jitsu requires students to spar and fight in class. They can also choose to compete to prove
            their ability or to advance to new levels of achievement.
          </p>
          <p>
            Brazilian Jiu Jitsu competitions help students set goals and work toward them - and to relish the experience
            of victory.
          </p>
        </div>
      </div>
    </section>

    <Review />

    <!-- FAQ -->
    <Faqs :faqs="faqs" />

    <section
      id="more-cta"
      class="module block_5f3a983f3ea5f content-columns all light-font parallax p-t-large p-b-large"
    >
      <div class="container font-left">
        <div class="module-header aos-init aos-animate" data-aos="fade-down">
          <div class="content-sub-header"></div>
          <h2>MORE BENEFITS</h2>
        </div>
        <div class="columns four-columns aos-init aos-animate" data-aos="fade-up">
          <div class="indiv-column">
            <p>Brazilian Jiu Jitsu training relieves stress and anxiety and increases mental well-being.</p>
          </div>
          <div class="indiv-column">
            <p>Brazilian Jiu Jitsu helps build strength, flexibility, and endurance.</p>
          </div>
          <div class="indiv-column">
            <p>Brazilian Jiu Jitsu improves cardiovascular fitness and overall health.</p>
          </div>
          <div class="indiv-column">
            <p>
              Brazilian Jiu Jitsu strengthens the mind-body connection, improves concentration, and encourages
              discipline and goal-setting.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style lang="scss" scoped>
.bg-grey {
  background: #f3f3f3;
}

#hero {
  h1 {
    text-shadow: 2px 2px 2px whitesmoke;
  }

  .banner-bg {
    background: url(/images/Violet-Crown-Jiu-Jitsu-scaled.webp) no-repeat;
    background-size: cover;
  }

  .cutout {
    background: url(/images/adult/bjjbanner2.png) no-repeat top center;
  }
}

#section-1 {
  .content-right {
    background: url(/images/adult/Photo-Jan-21-12-40-10-AM.webp) no-repeat top center;
    background-size: cover;
  }
}

#results-cta {
  background: url(/images/adult/Violet-Crown-Jiu-Jitsu-facebook-3.webp) no-repeat center center;
  background-size: cover;
}

#section-2 {
  .content-right {
    background: url(/images/adult/Photo-Jan-21-12-48-11-AM.webp) no-repeat top center;
    background-size: cover;
  }
}

#section-3 {
  .content-left {
    background: url(/images/adult/Photo-Jan-26-12-40-39-PM.webp) no-repeat top center;
  }
}

#section-4 {
  .content-right {
    background: url(/images/adult/Photo-Jan-30-12-46-39-PM.webp) no-repeat top center;
  }
}

#section-5 {
  .content-left {
    background: url(/images/adult/88358367-DSC_6438.webp) no-repeat top center;
  }
}

#more-cta {
  background: url(/images/adult/Violet-Crown-Jiu-Jitsu-facebook-3.webp) no-repeat center center;
  background-size: cover;
}
</style>
