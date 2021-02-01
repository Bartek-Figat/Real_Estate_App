import React from 'react';

export const AlertLoginBoxComponent = () => (
  <section>
    <div className=" " role="alert">
      <i className="fa fa-exclamation-triangle display-4 font-weight-bold ts-opacity__30 mr-5 py-2" />
      <aside>
        <h5 className="font-weight-normal">Please Login Or Register</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat tempor sapien. In
          lobortis posuere tincidunt. Curabitur malesuada tempus ligula nec
        </p>
        <a href={() => false}>Register</a>
        <a href={() => false}>Login</a>
      </aside>
    </div>
  </section>
);
