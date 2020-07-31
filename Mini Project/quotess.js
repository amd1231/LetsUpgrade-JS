let quot = [ 'Nothing is impossible, the word itself says “I’m possible”! -- Audrey Hepburn',
    'I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel. -- Maya Angelou',
    'Whether you think you can or you think you can’t, you’re right. -- Henry Ford ',
    'Perfection is not attainable, but if we chase perfection we can catch excellence. -- Vince Lombardi',
    'Life is 10 percent what happens to me and 90 percent of how I react to it. -- Charles Swindoll',
    'If you look at what you have in life, you’ll always have more. If you look at what you don’t have in life, you’ll never have enough. -- Oprah Winfrey',
    'None of us is as smart as all of us. -- Ken Blanchard',
    'I can’t change the direction of the wind, but I can adjust my sails to always reach my destination. -- Jimmy Dean',
    'Believe you can and you’re halfway there. -- Theodore Roosevelt',
    'To handle yourself, use your head; to handle others, use your heart. -- Eleanor Roosevelt',
    'Too many of us are not living our dreams because we are living our fears. -- Les Brown',
    'Alone, we can do so little; together we can do so much. -- Helen Keller',
    'Whatever the mind of man can conceive and believe, it can achieve. -- Napoleon Hill',
    'Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails. Explore, Dream, Discover. -- Mark Twain',
    'I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed. -- Michael Jordan',
    'Strive not to be a success, but rather to be of value. -- Albert Einstein',
    'I am not a product of my circumstances. I am a product of my decisions. -- Stephen Covey',
    'When everything seems to be going against you, remember that the airplane takes off against the wind, not with it. --Henry Ford',
    'The most common way people give up their power is by thinking they don’t have any. -- Alice Walker',
    'The most difficult thing is the decision to act, the rest is merely tenacity. -- Amelia Earhart',
    'Teamwork is the ability to work together toward a common vision, the ability to direct individual accomplishments toward organizational objectives. It is the fuel that allows common people to attain uncommon results. -- Andrew Carnegie',
    'Don’t judge each day by the harvest you reap but by the seeds that you plant. -- Robert Louis Stevenson',
    'The real opportunity for success lies within the person and not in the job. -- Zig Ziglar',
    'Change your thoughts and you change your world. -- Norman Vincent Peale',
    'There is no royal road to anything. One thing at a time, all things in succession. That which grows fast, withers as rapidly. That which grows slowly, endures. -- Josiah Gilbert Holland',
    'Be not afraid of life. Believe that life is worth living, and your belief will help create the fact. -- William James',
    'Build your own dreams, or someone else will hire you to build theirs. -- Farrah Gray',
    'Remember that not getting what you want is sometimes a wonderful stroke of luck. -- Dalai Lama',
    'You can’t use up creativity. The more you use, the more you have. -- Maya Angelou',
    'I have learned over the years that when one’s mind is made up, this diminishes fear. -- Rosa Parks',
    'I would rather die of passion than of boredom. -- Vincent van Gogh',
    'A truly rich man is one whose children run into his arms when his hands are empty. -- Unknown',
    'A person who never made a mistake never tried anything new. -- Albert Einstein',
    'What’s money? A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do. -- Bob Dylan',
    'When I hear somebody sigh, ‘Life is hard,’ I am always tempted to ask, ‘Compared to what?’” -- Sydney Harris',
    'Everything has beauty, but not everyone can see. -- Confucius',
    'The only person you are destined to become is the person you decide to be. -- Ralph Waldo Emerson',
    'We can’t help everyone, but everyone can help someone. -- Ronald Reagan',
    'Everything you’ve ever wanted is on the other side of fear. —George Addair',
    
    'Nothing will work unless you do. —Maya Angelou',
   
    'What we achieve inwardly will change outer reality. —Plutarch'
    ]


    function start(){
        var randomNumber = Math.floor(Math.random() * (quot.length));
        document.getElementById('quote').innerHTML = quot[randomNumber];
    }



