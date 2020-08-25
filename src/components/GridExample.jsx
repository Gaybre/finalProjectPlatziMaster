import React from 'react';

import Input from './atoms/Input';
import Button from './atoms/Button';
import Icon from './atoms/Icon';
import ImageProfile from './atoms/ImageProfile';

const GridExample = () => (
  <section>
    <div className="wrapper">
      <div className="row">
        <div className="column-3">
          <p>Column 3</p>
          <Icon />
          <Icon iconName="star" size="100px" color="var(--Color-Secondary)" />
          <ImageProfile ImageProfile="/" />
        </div>
        <div className="column-3">
          <p>Column 3</p>
        </div>
      </div>
      <div className="row">
        <div className="column-2">
          <p>Column 2</p>
        </div>
        <div className="column-2">
          <p>Column 2</p>
        </div>
        <div className="column-2">
          <p>Column 2</p>
        </div>
      </div>
      <div className="row">
        <div className="column-4">
          <p>Column 4</p>
        </div>
        <div className="column-2">
          <p>Column 2</p>
        </div>
      </div>
      <div className="row">
        <div className="column-4">
          <small>Hola mundo</small>
          <p>Hola mundo</p>
          <h3>Hola mundo c:</h3>
          <h2>Hola mundo c:</h2>
          <h1>Hola mundo c:</h1>
        </div>
      </div>
      <div className="row">
        <div className="column-6">
          <Input
            type="text"
            label="Name"
            placeholder="Username"
            id="1"
          />
        </div>
      </div>
      <div className="row">
        <div className="column-6">
          <Input
            type="number"
            label="Phone"
            id="2"
          />
        </div>
      </div>
      <div className="row">
        <div className="column-6">
          <Input
            type="password"
            label="Password"
            id="3"
          />
        </div>
      </div>
      <div className="row">
        <div className="column-6">
          <Button name="normal" type="normal" />
          <Button name="outline" type="outline" />
          <Button name="disabled" type="disabled" />
          <Button name="danger" type="danger" />
        </div>
      </div>
      <div className="row">
        <div className="column-6">
          <input type="file" />
        </div>
      </div>
    </div>
  </section>
);

export default GridExample;