import { Metadata } from 'next';
import { kalam } from '@/app/ui/fonts';
import HomeCarousel from '@/app/ui/component/home/carousel';
import HomeInfoGrid from './ui/component/home/info-grid';
import { VideoCameraIcon } from "@heroicons/react/24/solid";
import { ChartPieIcon } from "@heroicons/react/24/solid";
import { ChartBarIcon } from "@heroicons/react/24/solid";
import Content from '@/app/ui/main-layout/content/content';


export const metadata: Metadata = {
  title: 'Hi! Welcome to Home Page',
  description: 'Home page sample for company profile website.'
}


export default function Page() {

  return (
    <Content>
      <div className='flex flex-col md:flex-row bg-green'>
        <div className='h-96 w-full md:w-1/4 flex flex-col p-6 justify-center items-center'>
          <h2 className={`${kalam.className} text-8xl text-red xs:text-2xl md:text-8xl`}>Hello!</h2>
          <p>
            This is the sample of your future company profile website.
            Please take a look and see how we build it to supports your business.
          </p>
        </div>
        <div className='h-96 w-full md:w-3/4'>
          <HomeCarousel slideHeight='300px' />
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 mt-20 gap-20'>
        <HomeInfoGrid title='Services' content={'Swift access to anything else you need to tell the customers.'} image={<VideoCameraIcon className="size-20 text-yellow" />} />
        <HomeInfoGrid title='Hightlight' content={'Gate to more hightlight of your company.'} image={<ChartBarIcon className="size-20 text-yellow" />}  />
        <HomeInfoGrid title='Hit the Market' content={'And more quick shortcut to anything else you need say to approach the markets.'} image={<ChartPieIcon className="size-20 text-yellow" />}  />
      </div>
    </Content>
  );
}
