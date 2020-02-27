import React, {useState} from 'react';

const AddCounterForm = (props) => {

  const [name, setName] = useState('');

  const [value, setValue] = useState('');

  const onSubmit = () => {
    props.addCounter(name, value);
    setValue('');
    setName('');
  };

  return (
    <div className='card mb-2 ml-1 col-sm-8'>
      <div className="row">
        <div className="col col-sm-5">
          <input
            placeholder='Set Name'
            type='text'
            name='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='form-control'
          />
        </div>

        <div className="col col-sm-5">
          <input
            placeholder='Set Value'
            type='text'
            name='value'
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className='form-control'
          />
        </div>

        <div className="col">
          <button
            onClick={() => onSubmit(name, value)}
            className='btn btn-secondary'
          >Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCounterForm;
