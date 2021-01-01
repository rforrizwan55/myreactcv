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
          type: 'text',
          title: 'Career Profile',
          content: 'When I was child, I always want to be a developer.',
          icon: 'usertie'
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
