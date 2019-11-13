# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
quotes = Quote.create([
    {
      text: "Out beyond ideas of wrongdoing and rightdoing there is a field. I'll meet you there. When the soul lies down in that grass the world is too full to talk about.",
      author: "Rumi"
    },
    {
      text: "Stop acting so small. You are the universe in ecstatic motion.",
      author: "Rumi"
    },
    {
      text: "What you seek is seeking you.",
      author: "Rumi"
    },
    {
      text: "The minute I heard my first love story, I started looking for you, not knowinghow blind that was. Lovers don't finally meet somewhere. They're in each other all along.",
      author: "Rumi"
    },
    {
      text: "Yesterday I was clever, so I wanted to change the world. Today I am wise, so I am changing myself.",
      author: "Rumi"
    },
    {
      text: "Don’t grieve. Anything you lose comes round in another form.",
      author: "Rumi"
    },
    {
      text: "Dance, when you're broken open. Dance, if you've torn the bandage off. Dance in the middle of the fighting. Dance in your blood. Dance when you're perfectly free.",
      author: "Rumi"
    },
    {
      text: "If you are irritated by every rub, how will your mirror be polished?",
      author: "Rumi"
    },
    {
      author: "Jamal Farah",
      text: "Quote me if I was misquoted.",
    },
    {
      author: "Gabriel Kutik",
      text: "Too Blessed to be Stressed.",
    },
    {
      author: "Oneil",
      text: "Make it work.",
    }
  ])

userQuote = Userquote.create(username:"jamaal", quote_id:"${Quote[0].id}")
userQuote1 = Userquote.create(username:"stephen", quote_id:"${Quote[1].id}")
userQuote2 = Userquote.create(username:"lyle", quote_id:"${Quote[2].id}")
userQuote3 = Userquote.create(username:"chinomnso", quote_id:"${Quote[3].id}")
userQuote4 = Userquote.create(username:"ali", quote_id:"${Quote[4].id}")



  puts "Seeds Planted."