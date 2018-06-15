import App from './App';
import NotFoundPage from './pages/NotFoundPage';
import ContactsListPage from './pages/ContactsListPage';
import ContactsFormPage from './pages/ContactsFormPage';
import ContactsEditPage from './pages/ContactsEditPage';
import MessagesContactPage from './pages/MessagesContactPage';
import MessagesFormPage from './pages/MessagesFormPage';
import MessagesEditPage from './pages/MessagesEditPage';

export default [
  {
    ...App,
    routes: [
      {
        ...ContactsListPage,
        path: '/',
        exact: true
      },
      {
        ...ContactsFormPage,
        path: '/add-contact'
      },
      {
        ...ContactsEditPage,
        path: '/edit-contacts/:id'
      },      
      {
        ...MessagesContactPage,
        path: '/messages-contact/:id'
      }, 
      {
        ...MessagesFormPage,
        path: '/add-message'
      }, 
      {
        ...MessagesEditPage,
        path: '/edit-message/:id'
      },
      {
        ...NotFoundPage
      }
    ]
  }
];
