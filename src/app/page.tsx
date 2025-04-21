import React from 'react'
import Link from 'next/link'
const page = () => {
  return (
    <div className=' mx-4 sm:mx-10 md:mx-20 lg:mx-40 xl:mx-60 border bg-white shadow-xl text-sm'>
      <div className=' my-0 mx-10  '>
        
      <div className='text-center'>
        <h2 className='text-3xl  font-medium mt-8'>SHIVAM GUPTA</h2>
        <div className='flex justify-center gap-4 mt-1'>
          <p>+91 7355400703</p>
          <p>Kanpur, India</p>
        </div>
        <div className='flex flex-wrap  justify-center gap-4 text-blue-700 cursor-pointer'>
          <Link href="mailto: sg641818@gmail.com">sg641818@gmail.com</Link>
          <Link href="https://www.linkedin.com/in/shivamgupta6418/" target="_blank">linkedin.com/in/shivamgupta6418/</Link>
          <Link href="http://shivamgupta.space/" target="_blank">shivamkgupta.space/</Link>
        </div>
      </div>


      <div className='mx-2 mt-2'>
        <div className=' font-semibold'>EDUCATION</div>
        <hr className='mb-0.5'  />
        <div className='flex justify-between '>
          <p> <span className='font-semibold'>Bachelors of Technology in Computer Science (Artificial Intelligence) </span>, Chhatrapati Shahu Ji Maharaj
            University</p>

          <p>2021 - 2025</p>
        </div>
        <p>Kanpur, Uttar Pradesh</p>
      </div>

      <div className='mx-2 mt-4' >
        <div className=' font-semibold'>SKILLS</div>
        <hr className='mb-0.5' />
        <div>
          <div className='flex gap-12 flex-wrap'>
            <p className='font-semibold'>Technical Skills <span className='ml-14 font-normal'>C++, Python, JavaScript, MySQL, MongoDB</span> </p>

          </div>
          <div className='flex gap-16'>
            <p className='font-semibold'>Frameworks <span className='ml-18 font-normal'> React, Next.js, Node.js, Express.js, TailwindCSS</span></p>

          </div>
          <div className='flex gap-28'>
            <p className='font-semibold'>Tools <span className='ml-30 font-normal'>Git, GitHub, Postman, REST API, VS Code</span></p>

          </div>
        </div>
      </div>


      <div className='mx-2 mt-4'>
        <div className=' font-semibold'>EXPERIENCE</div>
        <hr className='mb-0.5'  />
        <div className='flex justify-between'>
          <p className='font-semibold'>Software Developer Intern</p>
          <p> Dec 2024 - April 2025</p>
        </div>
        <div>
          <div className='flex justify-between'>
            <p>Automate Accounts</p>
            <p className='italic'>Remote</p>
          </div>
          <div>
            <ul className='list-disc ml-8 mt-4' >
              <li>
                Developed and deployed the Deductible Buydown Application using Python, FastAPI, Flask, and Jinja2, enabling insurance plan selection, Stripe payment flow, and role-based user journeys.
              </li>
              <li>
                Implemented CSV file upload and parsing for bulk data entry and automated workflows using Zoho Flow and
                ZeptoMail for real-time transactional emails.
              </li>
              <li>
                Integrated secure authentication with user-specific flows and enabled continuous deployment via CI/CD pipelines
                to streamline production updates.
              </li>
            </ul>

            <div className='flex justify-between mt-4'>
              <p className='font-semibold'>Web Developer Intern</p>
              <p> Jun 2023 - Aug 2023</p>
            </div>
            <div>
              <div className='flex justify-between'>
                <p>Bambhari</p>
                <p className='italic'>Remote</p>
              </div>
              <div>
                <ul className='list-disc ml-8 mt-4' >
                  <li>
                    Contributed to the development of a user-friendly website creation tool with drag-and-drop features.

                  </li>
                  <li>
                    Added 15+ new features and introduced a user-centric approach to streamline UI components.

                  </li>
                  <li>
                    Improved user experience, boosting conversion rates and reducing bounce rates.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div>
          </div>
        </div>
      </div>

      <div className='mx-2 mt-4'>
        <div>
          <div className=' font-semibold'>PROJECTS</div>
          <hr className='mb-0.5' />
          <div className='flex justify-between'>
            <p className='font-semibold'>Jobify</p>
            <Link href="https://github.com/Shivam-fibo/Jobify" target='_blank' className='italic text-blue-600 cursor-pointer'>Github</Link>
          </div>
          <p>A job portal with comprehensive features tailored for both employers and job seekers.</p>
          <ul className='list-disc ml-8'>
            <li>Developed job search, advanced filtering, application submission, and resume upload functionalities.</li>
            <li>Enhanced usability through role-based access for employers, recruiters, and job seekers.</li>
            <li>Integrated secure authentication and implemented robust job posting and user management.
            </li>
          </ul>
        </div>

        <div className='mt-2'>
          <div className='flex justify-between'>
            <p className='font-semibold'> FoxQuiz</p>
            <Link href="https://github.com/Shivam-fibo/FoxQuiz" target='_blank' className='italic text-blue-600 cursor-pointer' >Github</Link>
          </div>

          <p>An admin-user quiz management platform built with real-time tracking and persistent data handling.</p>
          <ul className='list-disc ml-8'>
            <li>Designed portals for quiz creation, result tracking, and feedback collection.</li>
            <li> Built real-time tracking for quiz submissions and ensured data persistence.</li>
            <li>Implemented dynamic data fetching, server-side pagination, and smooth user interactions</li>
          </ul>
        </div>
      </div>

      <div className='mt-2 mb-4'>
        <div className=' font-semibold'>EXTRA-CURRICULAR ACTIVITIES</div>
        <hr className='mb-0.5' />
        <ul className='list-disc ml-8'>
          <li>Written 10+ technical articles on <span> <Link href="https://shivamgupta6418.hashnode.dev" className='text-blue-500 cursor-pointer'target='_blank' >Hashnode</Link></span></li>
          <li>Solved 200+ coding questions on platforms like LeetCode, GeeksforGeeks.</li>
        </ul>


      </div>

      </div>
    </div>
  )
}

export default page