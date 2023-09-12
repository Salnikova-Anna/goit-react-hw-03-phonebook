import { Component } from 'react';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = evt => {
    const name = evt.target.name;
    this.setState({ [name]: evt.target.value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.handleFormSubmit(this.state);
    this.cleanFormData();
  };

  cleanFormData = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputName1" className="form-label">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            className="form-control"
            id="exampleInputName1"
            aria-describedby="emailHelp"
            onChange={this.handleChange}
          />
          <div className="mb-3">
            <label htmlFor="exampleInputNumber1" className="form-label">
              Number
            </label>
            <input
              type="tel"
              name="number"
              value={this.state.number}
              pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              className="form-control"
              id="exampleInputNumber1"
              aria-describedby="emailHelp"
              onChange={this.handleChange}
            />
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
