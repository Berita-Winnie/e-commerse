import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8  border-t">
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px] "
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            iure non nemo dicta officiis blanditiis, quo, et aliquam voluptatem
            iusto reprehenderit magnam ducimus rem, voluptatum quod dolorum nam
            alias dolores!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, amet
            aperiam adipisci sint officiis accusamus magni inventore vel atque
            expedita et cumque nihil. Ab, quo quam fugiat molestias perspiciatis
            nihil!
          </p>
          <p className="text-gray-800 ">Our Mission</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
            dolorum voluptates natus repellendus iure animi, quasi eveniet
            facilis eos adipisci ab officia soluta placeat eius ad sequi sint!
            Possimus, nam.
          </p>
        </div>
        <div className="text-xl py-4 ">
          <Title text1={'WHY'} text2={'CHOOSE US'} />
        </div>
        <div className="flex flex-col md:flex-row  text-sm mb-20 ">
          <div className="border px-10 md:px-16 py-8 flex flex-col gap-5">
            <b>Qualty Assuarance</b>
            <p className="text-gray-600">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed
              dignissimos quod ea minus similique nisi dolor placeat accusantium
              ab iure, vitae
            </p>
          </div>
          <div className="border px-10 md:px-16 py-8 flex flex-col gap-5">
            <b>Conveneience:</b>
            <p className="text-gray-600">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed
              dignissimos quod ea
            </p>
          </div>
          <div className="border px-10 md:px-16 py-8 flex flex-col gap-5">
            <b>Exceptional Customer service!</b>
            <p className="text-gray-600">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed
              dignissimos quod ea minus similique nisi dolor placeat accusantium
              ab iure, vitae
            </p>
          </div>
        </div>
        <NewsLetterBox />
      </div>
    </div>
  )
}

export default About
