import React, { useState } from 'react';
import { Icon, Sidebar, Menu, Segment, Header } from 'semantic-ui-react';
import './style.css'; // Import the CSS file

const App = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div>
      <Header as='h2'>
        <Icon name='bars' size='large' onClick={toggleSidebar} />
        <Header.Content>Your App Name</Header.Content>
      </Header>
      <Sidebar.Pushable as={Segment}>
        <Sidebar
          as={Menu}
          animation='push'
          icon='labeled'
          inverted
          onHide={() => setSidebarVisible(false)}
          vertical
          visible={sidebarVisible}
          width='thin'
        >
          <Menu.Item as='a'>Home</Menu.Item>
          <Menu.Item as='a'>Dashboard</Menu.Item>
          <Menu.Item as='a'>Settings</Menu.Item>
        </Sidebar>

        <Sidebar.Pusher>
          <Segment basic>
            <h1>Dashboard Content</h1>
            <p>Add your main dashboard content here.</p>
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </div>
  );
};

export default App;
