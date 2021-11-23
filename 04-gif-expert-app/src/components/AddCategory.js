import {useState} from "react";
import PropTypes from 'prop-types';
import {Button, Form, FormControl} from "react-bootstrap";

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length > 2){
            setCategories(cat=>[inputValue, ...cat])
            setInputValue('');
        }

    }

    return (
        <Form className="d-flex" onSubmit={ handleSubmit }>
            <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={ inputValue }
                onChange={ handleInputChange }
            />
            <Button type="submit" variant="outline-success">Search</Button>
        </Form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}

