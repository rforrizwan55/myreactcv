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
          image: 'https://media-exp1.licdn.com/dms/image/C4E03AQHGYoBvi2X32g/profile-displayphoto-shrink_200_200/0/1607488648166?e=1614816000&v=beta&t=3Gggtk3kmGLYXx2E27Zn_CtAyfsc7k2ae__z0JuM3rw',
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
        },{
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
