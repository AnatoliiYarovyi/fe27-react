import { Component } from 'react';
import PropTypes from 'prop-types';
import Input from '../../UI/Input';
import Checkbox from '../../UI/Checkbox';
import Button from '../../UI/Button';
import style from './ApartmentsForm.module.css';

class ApartmentsForm extends Component {
  state = {
    title: '',
    descr: '',
    rating: 0,
    imgUrl: 'https://res.cloudinary.com/kyoo/image/upload/v1609344653/booking/apartment-10_s17fn0.jpg',
    closeOnSubmit: false
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { onSubmit } = this.props;

    onSubmit && onSubmit({...this.state})
  }

  handleChange = (event) => {
    let { value, name, type, checked } = event.target;

    this.setState(() => ({
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  render() {
    return (
      <form className={style.form} onSubmit={this.handleSubmit}>
        <Input onChange={this.handleChange} className={style.input} name="title" placeHolder="Title" />
        <Input onChange={this.handleChange} className={style.input} name="descr" placeHolder="Description" />
        <Input
          onChange={this.handleChange}
          className={style.input}
          name="rating"
          placeHolder="Rating"
          type="number"
          min="1"
          max="5"
        />
        <Checkbox name="closeOnSubmit" onChange={this.handleChange}>close on submit</Checkbox>
        <Button type="submit">Save</Button>
      </form>
    );
  }
};

ApartmentsForm.propTypes = {
  initialState: PropTypes.shape({
    title: PropTypes.string,
    descr:  PropTypes.string,
    rating:  PropTypes.number,
    imgUrl: PropTypes.string,
  }),
  onSubmit: PropTypes.func
};

export default ApartmentsForm;