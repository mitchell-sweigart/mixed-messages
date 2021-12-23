const zodiacSigns = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"]
const firstSentence = ["You feel under appreciated", "You feel undervalued", "You feel overworked", "You feel appreciated", "You love your job"]
const secondSentence = ["You will recieve a large windfall", "I see wealth on your horizon", "You will become a doctor", "You face calamity"]




const randomZodiacPossition = Math.floor(Math.random() * zodiacSigns.length)
const randomZodiacSign = zodiacSigns[randomZodiacPossition]

const randomFirstSentencePossition = Math.floor(Math.random() * firstSentence.length)
const randomFirstSentence = firstSentence[randomFirstSentencePossition]

const randomSecondSentencePossition = Math.floor(Math.random() * secondSentence.length)
const randomSecondSentence = secondSentence[randomSecondSentencePossition]

function randomMessage() {
    console.log(`${randomZodiacSign}: ${randomFirstSentence}. ${randomSecondSentence}.`)
}

randomMessage();