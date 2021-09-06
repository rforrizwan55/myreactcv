import React, { Component } from 'react'
import styled from 'styled-components';
import CV from 'react-cv'

const MYCV = styled.div`
.bulma_container__3NasN.bulma_is-primary__1jh74{
  background-image: linear-gradient(0deg, #0fd1f2, #7732a8);
}
`;

const DIV = styled.div`
display: flex;
justify-content: center;
padding: 1rem;
a {
    color: #3273dc;
    cursor: pointer;
    text-decoration: none;
    margin-bottom: 1rem;
}
`;

export default class App extends Component {
  render () {
    return (
      <MYCV>
      <CV
        personalData={{
          name: 'Raqeeb Abdul',
          title: 'Senior Engineer @ Target',
          image: 'https://avatars.githubusercontent.com/u/1614876?v=4',
          contacts: [
            { type: 'email', value: 'raqeebabdul10@gmail.com' },
            { type: 'phone', value: '+1 (320) 200 8059' },
            { type: 'location', value: 'Minneapolis' },
            { type: 'website', value: 'blog.raqeebabdul.com' },
            { type: 'linkedin', value: 'linkedin.com/in/rabdul' },
            { type: 'github', value: 'github.com/rforrizwan55' }
        ]}}
        sections= {[{
          type: 'common-list',
          title: 'About me',
          items: [
            {
              title: 'Problem solving',
              authority: 'As a Software Engineer, always been passionate about solving business problems with technology'
            },
            {
              title: 'Empathy',
              authority: 'Programming is always about humans helping other humans by creating the most comforting experience'
            },
            {
              title: 'Curious',
              authority: 'Naturally curious who always loved to learn. Also being curious, led me to be more creative'
            },
            {
              title: 'Open-mindedness',
              authority: 'True collaboration often leads to the best possible results'
            },
            {
              title: 'Collaborator',
              authority: ' I enjoy working in a team environment, and I get along well with people'
            },
            {
              title: 'Brisk',
              authority: 'Love the idea of iterative development where requirements and solutions evolve through collaboration between self-organizing cross-functional teams'
            }
          ],
          icon: 'usertie'
        },
        {
          type: 'common-list',
          title: 'Tech',
          items: [
            {
              title: 'Android',
              authority: 'Kotlin/Java, Hilt, Coroutines, Compose, Jetpack components, Material UI, RoomDb, Dagger, Retrofit, RxJava, RxAndroid, MVI, MVVM, JUnit Tests and Instrumentation Tests'
            },
            {
              title: 'Backend Frameworks',
              authority: 'Micronaut, SpringBoot, Microservices, Websockets and Distributed applications using Kafka'
            },
            {
              title: 'Databases',
              authority: ' Postgres, MongoDB, Redis'
            },
            {
              title: 'Scripting',
              authority: 'Python, Shell scripting'
            },
            {
              title: 'Monitoring ',
              authority: ' Kibana, Grafana'
            },
            {
              title: 'CI',
              authority: 'Vela(Target open-source project), CircleCI, Github actions'
            },
            {
              title: 'CD',
              authority: 'Kubernetes, Docker, Spinnaker, Consul'
            }
          ],
          icon: 'rocket'
        },
        {
          type: 'experiences-list',
          title: 'Experiences',
          icon: 'archive',
          items: [
            {
              title: 'Sr Engineer',
              company: 'Target',
              description: 'Working in infra team, creating MDM for Target',
              companyWebSite: 'https://target.com',
              companyMeta: '',
              datesBetween: '2018.12 - Present',
              descriptionTags: ['Android', 'Micronaut', 'Kafka', 'Kubernetes', 'MongoDB', 'Postgres']
            },
            {
              title: 'Software Engineer',
              company: 'Be The Match',
              description: 'Was part of team to update current system that performs a patient match against donors into a Hadoop distributed system for faster processing of search and match results',
              companyWebSite: 'https://bethematch.org',
              datesBetween: '2017.10 - 2018.12',
              descriptionTags: ['Java', 'Spring Boot', 'Hadoop', 'Spark', 'Automation Testing']
            },
            {
              title: 'Software Engineer',
              company: 'Xpressdocs',
              description: 'Created iOS/Android application for xpressdocs',
              companyWebSite: 'https://xpressdocs.com',
              datesBetween: '2017.02 - 2017.10',
              descriptionTags: ['Android', 'iOS', 'Java', 'Spring Boot', 'PHP', 'MySQL', 'Python']
            },
            {
              title: 'Research Assitant',
              company: 'St Cloud State',
              description: 'Published 5 papers on Android and Cloud',
              companyWebSite: 'https://stcloudstate.edu',
              datesBetween: '2015.08 - 2016.12',
              descriptionTags: ['Android', 'Java', 'Spring Boot', 'MySQL']
            },
            {
              title: 'Software Engineer',
              company: 'Winwire Technologies',
              description: 'Created mobile applications for clients',
              companyWebSite: 'https://winwire.com',
              datesBetween: '2013.06 - 2015.07',
              descriptionTags: ['Android', 'Xamarin', 'Java', 'PHP', 'MySQL', 'Python']
            }
          ]
        },
        {
          type: 'common-list',
          title: 'Education',
          icon: 'graduation',
          items: [
            {
              title: 'Masters of Science - MIS',
              authority: 'St. Cloud State',
              authorityWebSite: 'https://stcloudstate.edu',
              rightSide: '2015 - 2016'
            },
            {
              title: 'Bachelors of Tech - IT',
              authority: 'JNTU-Hyderabad',
              authorityWebSite: 'https://jntuh.ac.in',
              rightSide: '2009 - 2013'
            }
          ]
        }]}
        branding={false} // or false to hide it.
      />
      <DIV id="hosted">
        <h2>
          Copyright © Raqeeb Abdul. 2021. <a href="https://kubernetes.io/">Hosted on Kubernetes</a>
        </h2>
      </DIV>
      </MYCV>
    )
  }
}
