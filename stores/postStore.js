import { defineStore, acceptHMRUpdate } from 'pinia'
export const usePostStore = defineStore('postStore', {
  state: () => ({
    posts: [
      {
        title: 'We are happy to serve North Austin/Crestview area',
        date: 'April 11, 2022',
        content:
          "<p>Austin is such a fun city.  Lots of activities to participate in.  Q2 soccer stadium is down the road from our academy in North Austin. We are surrounded by so much good food. We truly love the location of our gym and definitely take advantage of the food after training!  So when you come and visit, stick around and we'll grab some food in the North Austin area.  Some favorites we hit are Slab BBQ, Mikado restaurant, Coco's Cafe on research, Pho Van, El Tacorrido, Ramen Tatsuya. So many more spots that we enjoy from time to time.  Cheers from our crew at Violet Crown Jiu Jitsu and see ya on the mat.</p>",
        link: 'we-are-happy-to-serve-north-austin-crestview-area',
        img: '',
        category: 'General',
      },
      {
        title: 'When is a good time to start advanced BJJ class?',
        date: 'March 29, 2022',
        content: `
              <p>We've all been there. 5 months into training and you are ready to step it up.  The idea of learning an advanced submission to catch the other white belts is a thrill and exciting, as you should be.  All of these thoughts ran through all current BJJ Black Belts minds at white belt. And most will tell you to be as patient as possible when it comes to rushing technique. There is a reason why your coach wants you to slow down and learn the foundational movements first.</p>
              <p>One of the reasons is to avoid injury.  There are literally over 100 drills to learn that are jiu jitsu specific. You know…the boring line drills before class. Well, no matter how boring, the movements are very important in your every day training. Not only do they serve purpose for a warm-up, they prepare you for breaking falls, creating space to escape bad positions, and learn how to perform takedowns properly. These movements are essential and if you can't perform them properly solo, how can you perform it against a partner who is trying to hulk smash you?</p>
              <p>So when is the right time take the advanced class? Every school is different, with various curriculums and ideas.  At Violet Crown Jiu Jitsu, we recommend blue belt and up.  However, if an advanced white belt who has been doing great in competition or live sparring, we will make exceptions. Everyone learns at different rates and even if they are doing great against other white and blue belts doesn't mean they can perform rvdlva to saddle to inside heel hook.</p>
              <p>So although there is no definite answer to the question, take your time, learn the fundamentals inside out.  There is no real rush! Enjoy the process, tap early, tap often. Don't limp out of your gym.  When is the right time to take advanced classes isn't the question.  The real question is what am I doing to solidify my BJJ Basics?</p>
            `,
        link: 'when-is-a-good-time-to-start-advanced-bjj-class',
        img: '',
        category: 'General',
      },
      {
        title: 'How to train BJJ/Jiu Jitsu safely',
        date: 'March 12, 2022',
        content: `
            <p>Everyone in BJJ (Brazilian Jiu Jitsu) has their own journey.  For some it can be about self defense and others it can be 100 percent competition focused.  After training for 17 years in this martial art, I have found  that I get the most out of my training by communicating with my training partners.  It can be something as simple as a minor injury or “hey I'm just a beginner I may have a few questions.”</p>
            <p>The bigger our sport grows we have to find the patience to accommodate those around us.  If we don't take care of our training partners, we risk injury and most importantly losing them.  On my first day of jiu jitsu someone almost injured my neck really bad.  Luckily, I recovered and was able to continue the journey.  It doesn't take much to cause an injury in our sport.  And as much as we want to win, we have to train ourselves to do it safely.  It is something you learn over time. The art of sensibility.  Feeling when a submission is tight.  Be the training partner you want to have everyday on the mat.  We should be smiling inside while sharpening our swords.  Trusting our art form. Trusting our family on the mat.</p>
            <p>Injuries do happen and it's not 100 percent avoidable but it is important to communicate to your partner if he/she is being to rough or unnecessarily cranking submissions.  Make the most out of your journey, stay positive, give back to the new generation.  It isn't always about winning. The mat is more about learning and doing it safely.  If there is anything I teach at the academy, it is to be careful.  There is a time and a place to go 100 percent and leave it all on the mat.  Cheers and see ya on the mat!</p>
          `,
        link: 'the-importance-of-training-bjj-safely',
        img: '',
        category: 'Health',
      },
      {
        title: 'Protect Your Heart with Martial Arts',
        date: 'September 19, 2020',
        content: `
          <p>Every year, the American Heart Association celebrates Heart Month to raise awareness about heart disease and heart health.</p>
          <p>What you may not know is that martial arts are great for the heart. In fact, the cardiac benefits of martial arts give a whole new meaning to the idea of cardiovascular fitness.</p>
          <p>With that in mind, here are some ways that taking martial arts classes can protect and strengthen your heart.</p>
          <h5>Martial Arts Raise the Heart Rate</h5>
          <p>The first way that martial arts can help the heart is by raising your heart rate when you work out. The heart is a muscle and it needs to be worked. When you take a martial arts class, your heart rate is elevated.</p>
          <p>The benefit of raising the heart rate is that it oxygenates the blood, and helps promote calorie burning even after you're done working out. People of all ages need to keep their hearts pumping, and martial arts is a great way to do it.</p>
          <h5>Martial Arts Lower Blood Pressure</h5>
          <p>Did you know that a high-intensity martial arts workout can help lower your blood pressure? It's true. Hypertension, or high blood pressure, is a leading contributor to heart disease.</p>
          <p>When you work out, your heart becomes stronger - and that means that it can pump blood more efficiently than it can without exercise. The less effort your heart has to expend on pumping blood, the lower your blood pressure is.</p>
          <h5>Martial Arts Lower Cholesterol</h5>
          <p>LDL cholesterol - the so-called “bad” cholesterol” - is a contributing factor in heart disease. Regular participation in martial arts helps you lose weight and that decreases the amount of LDL cholesterol in your blood.</p>
          <p>There's evidence that working out also shrinks the proteins that carry cholesterol through the bloodstream, making them less dangerous to the heart.</p>
          <p>On a related note, regular vigorous exercise - such as the kind you get in a martial arts workout - helps to increase HDL or “good” cholesterol.</p>
          <h5>Martial Arts Reduces Stress</h5>
          <p>One thing that separates martial arts from many other forms of exercise is that it requires mental stillness combined with physical exertion.</p>
          <p>Mental stillness contributes to mindfulness, a practice that can significantly decrease stress and anxiety in both children and adults.</p>
          <p>Considering that there is a direct link between stress and heart health (stress contributes to high blood pressure and related issues), the fact that participating in martial arts can reduce stress is a huge benefit for the heart.</p>
          <h5>Conclusion</h5>
          <p>In addition to the benefits already mentioned, martial arts training also helps to improve discipline, build muscle coordination, and increase self-confidence.</p>
          <p>This month, why not give your heart a boost by adding martial arts to your workout routine?</p>
          `,
        link: 'protect-your-heart-with-martial-arts',
        img: '',
        category: 'Health',
      },
      {
        title: 'The Positive Effects of Martial Arts for a Child in School',
        date: 'September 19, 2020',
        content: `
          <p>Grade school can be quite the experience for any child. It is a place where a child not only learns academically but one where a child must learn to socialize and function in the world. Unfortunately, there are a lot of negative experiences that a child may have when going through school. Whatever those experiences may be, it would be a good idea to have a child participate in martial arts classes. Doing so will give them the tools they need to survive the school experience. The benefits associated with taking martial arts classes are essential for them to be able to have a positive experience in school.</p>
          <h5>Helps them earn better grades in school</h5>
          <p>Getting good grades is reflective of a child's comprehension of the material. But, it is also indicative of their discipline and responsibility traits. Through martial arts, students are to learn the fundamentals of stretch and physical routines. They also learn to become disciplined with practice and keeping up with their cleanliness of uniforms. Children learn how to be punctual and can focus their daily thoughts on the tasks at hand. Thus, being able to exhibit these positive traits will translate to better grades as schooling requires the proficiency of these characteristics.</p>
          <h5>Gives them the confidence to stand up to bullies</h5>
          <p>Bullying is a very prominent and unfortunate experience that many children will either witness or become victims of in their lifetimes. Being a part of martial arts can give children the strength and confidence that they need to stand up to these negative individuals. Not only will they learn about self-defense strategies, they will be able to feel assertive and courageous. Possessing self-confidence is the number one way for a child to be able to stand up for him/herself in any threatening situation. Through martial arts, they will learn that not all conflicts have to be physical. They will possess the mature mindset to tackle any conflict with assurance and pride.</p>
          <h5>Gives them the ability to make friends</h5>
          <p>Having friends and keeping them can be the big difference between a positive and negative school experience for children. They will latch onto people who share common interests with them and feel devastated when those relationships disappear. However, for children who regularly practice martial arts, they have a different capacity to make and keep friends in their circle. Besides making friends in the martial arts classes themselves, children are able to easily socialize and collaborate with other students at school. They instill a lot of the same discipline and traits they learn from martial arts in their everyday lives. For instance, they may be first to initiate a conversation with quiet students because they feel confident in themselves to do so.</p>
          <p>Being a part of something special such as martial arts can be greatly impactful for children. Especially when it comes to school, children can gain invaluable skills and behaviors that will allow them to have more successful experiences in social settings. Although school is meant to teach them about a variety of things, having martial arts as a supplement can significantly affect the way they approach schooling and their overall experiences.</p>
          `,
        link: 'the-positive-effects-of-martial-arts-for-a-child-in-school',
        img: '',
        category: 'Health',
      },
    ],
  }),
  getters: {
    getAllPosts: (state) => state.posts,
    getPost: (state) => (id) => state.posts.filter((post) => post.link === id),
  },
})

if (import.meta.hot) import.meta.hot.accept(acceptHMRUpdate(usePostStore, import.meta.hot))
