import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import propertyImg from '../public/assets/projects/property.jpg';
import web1 from '../public/assets/projects/web/1.png'
import web2 from '../public/assets/projects/web/2.png'
import web3 from '../public/assets/projects/web/3.png'
import web4 from '../public/assets/projects/web/4.png'
import web5 from '../public/assets/projects/web/5.png'
import web6 from '../public/assets/projects/web/6.png'
import ml1 from '../public/assets/projects/ml/1.png'
import ml2 from '../public/assets/projects/ml/2.png'
import ml3 from '../public/assets/projects/ml/3.png'
import open1 from '../public/assets/projects/opencv/1.png'
import open2 from '../public/assets/projects/opencv/2.png'
import open3 from '../public/assets/projects/opencv/3.png'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <p className='text-sm tracking-widest uppercase text-[#5651e5] my-4'>
          Web Dev Projects
        </p>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Image To Text'
            backgroundImg={web1}
            projectUrl='/image'
            tech='React JS'
          />
          <ProjectItem
            title='Code Nexus-An Online IDE'
            backgroundImg={web2}
            projectUrl='/code'
            tech='React JS'
          />
          <ProjectItem
            title='Netflix Lite'
            backgroundImg={web3}
            projectUrl='/netflix'
            tech='React JS'
          />
          <ProjectItem
            title='YouTube Lite'
            backgroundImg={web4}
            projectUrl='/youtube'
            tech='React JS'
          />
          <ProjectItem
            title='Weather App'
            backgroundImg={web5}
            projectUrl='/weather'
            tech='React JS'
          />
          <ProjectItem
            title='Blood Thirst Game'
            backgroundImg={web6}
            projectUrl='/blood'
            tech='HTML, CSS & JavaScript'
          />

        </div>

        <p className='text-sm tracking-widest uppercase text-[#5651e5] mt-10'>
          Machine Learning Projects
        </p>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Mobile Price Prediction'
            backgroundImg={ml1}
            projectUrl='/mobile'
            tech='Machine Learning'
          />
          <ProjectItem
            title='Student Mark Prediction'
            backgroundImg={ml2}
            projectUrl='/student'
            tech='Machine Learning'
          />
          <ProjectItem
            title='Flight Price Prediction'
            backgroundImg={ml3}
            projectUrl='/flight'
            tech='Machine Learning'
          />
        </div>

        <p className='text-sm tracking-widest uppercase text-[#5651e5] mt-10 mb-4'>
          OpenCV Projects
        </p>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Mask Detection Model'
            backgroundImg={open1}
            projectUrl='/mask'
            tech='OpenCV'
          />
          <ProjectItem
            title='Object Detection Model'
            backgroundImg={open2}
            projectUrl='/object'
            tech='OpenCV'
          />
          {/* <ProjectItem
            title='Code Nexus-An Online IDE'
            backgroundImg={open3}
            projectUrl='/code'
            tech='React JS'
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
