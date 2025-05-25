import React from 'react';
import '../App.css';
import { services } from '../constants';
import ButtonLink from './ButtonLink';
import Footer from './Footer';

const ServiceCard = ({ service }) => (
  <div className='sm:w-[250px] w-full'>
    <div
      className='w-full green-pink-gradient p-[1px] rounded-[20px]'>
      <div
        className='rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        style={{ background: '#151030' }}>
        <img
          src={service.icon}
          alt='some_icon'
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {service.title}
        </h3>
      </div>
    </div>
  </div>
);

const About = () => {
  return (
    <div>

      <div className='bg-black h-full w-full text-white sm:flex sm:justify-around about py-12 mt-8 overflow-x-hidden' id='about'>
        <div className='flex flex-col justify-around'>
          <div className='sm:px-16 px-2'>
            <h2 className='text-4xl sm:text-5xl font-extrabold mt-2'>Introduction</h2>
            <p className='mt-3 mb-6 text-[17px] max-w-3xl leading-[30px]'>
              👨‍💻 Hi, I'm Pratik Unde, a passionate Software Developer with a strong background in building secure, scalable backend systems and encryption-based services. With experience in Java, Spring Boot, MongoDB, and integrations like Salesforce and Azure Key Vault, I specialize in delivering enterprise-grade solutions🚀.
              <br />
              ✍️ I enjoy exploring new technologies, documenting my journey, and contributing to the developer community. You can connect with me on <a className='text-green-300 hover:text-green-500 duration-300' href='https://www.linkedin.com/in/pratik-unde/' target='_blank'>LinkedIn</a> to follow my work and insights into cloud, cryptography, and secure system design.
              <br />
              Outside of coding, I'm enthusiastic about biking and occasionally indulge in photography📸 — capturing stories through my lens is my creative escape🌟📷.
            </p>

            <ButtonLink
              url='https://drive.google.com/file/d/19Vh0nx5JF9G_sgawb_dUIFlGSHtjp_dw/view?usp=drive_link'
              text='View Resume →'
              padding={`p-3`}
            />

          </div>
          <div className='mt-20 flex justify-center flex-wrap gap-7'>
            {services.map((service) => (
              <ServiceCard service={service} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About;