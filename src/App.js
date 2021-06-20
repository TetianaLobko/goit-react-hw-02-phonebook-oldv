import React, { Component } from "react";
import styles from "./App.module.css";

import Container from "./components/Container";
import ContactForm from "./components/ContactForm";
import Filter from "./components/Filter";
import ContactList from "./components/ContactList";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  addContact = (contact) => {
    this.setState({
      contacts: [contact, ...this.state.contacts],
    });
  };

  valuesFilter = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  getFilter = () => {
    const { filter, contacts } = this.state;
    const filterValues = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filterValues)
    );
  };

  checkName = (newName) => {
    return this.state.contacts.some(
      ({ name }) => name === Object.values(newName).join("")
    );
  };

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };

  filterContact = this.getFilter();

  render() {
    const filterContact = this.getFilter();
    return (
      <Container>
        <h1 className={styles.title}>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} contactList={this.checkName} />
        <h2 className={styles.title}>Contacts</h2>
        <Filter value={this.state.filter} SearchContact={this.valuesFilter} />
        <ContactList
          contactList={filterContact}
          onDelete={this.deleteContact}
        />
      </Container>
    );
  }
}

export default App;
