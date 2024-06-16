import React, {useState} from 'react'
import CardList from './CardList';
import './project.css'
const Project = () => {
    const [cards, setCards] = useState(skillCards)
  return (
    <section id='projects'>
        <span className='abTitle'>Projects</span>
        <div className='skills'>
            <CardList cards={cards} />
      </div>
    </section>
    
  )
}


const skillCards = [
    {
      id:1,
      skill: 'Library Management System',
      exp: 'A library management system  helps to manage library tasks such as book lending, book return, and inventory management. This system is developed in C++ using OOPs and File Handling concepts.'
    },
    {
      id:2,
      skill: 'Carbon Prints',
      exp: 'Designed and developed a user-friendly and interactive carbon footprint calculator website using MERN that allows users to calculate and educate themselves about the concept of carbon footprint.'
    },
    {
      id:3,
      skill: 'A Secure Searchable Encryption Scheme Over the Cloud',
      exp: 'Our work proposes a secure searchable encryption scheme over the cloud, where the data owners securely outsource the data over the cloud. Conference paper has been published in Scopus indexed conference ICICC- 2024.'
    },
    {
      id:4,
      skill: 'English-to-Spanish Translator',
      exp: 'Designed and developed a machine learning model to translate text from English to Spanish using state-of-the-art Transformer. The Transformer model was implemented using python tailored to translate a sentence character-by-character.'
    },
  ]


export default Project
