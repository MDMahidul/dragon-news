import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
      <Container className=" mx-auto">
        <h2 className="text-center my-5">Terms and conditions</h2>
        <p className='my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sapiente quam quo est veritatis vero nulla beatae dicta cupiditate dolor illo corrupti rem provident, libero odit maxime laboriosam ducimus iste, delectus consequuntur perferendis iusto ipsa rerum saepe. Enim veniam qui aspernatur obcaecati reiciendis quasi sint, iure nulla sunt reprehenderit suscipit animi quas vitae repellat corrupti delectus molestiae sed, minus placeat ab. Itaque modi non recusandae quod adipisci possimus amet illum similique? Officia laboriosam necessitatibus numquam nam vitae tempore, assumenda nulla repudiandae similique doloremque nemo est voluptas quos, voluptatem possimus dolorem aliquam obcaecati deleniti, porro deserunt nobis ratione expedita itaque. Quo quibusdam delectus reiciendis dolore, cum ex repellendus. Neque, culpa? Corporis aut quaerat, est modi animi, cumque a blanditiis tempore nam voluptatum dolore neque velit iste eius debitis dignissimos illum quod, rem obcaecati ullam nisi quos quam accusamus non. Sit eligendi quo quae accusantium quibusdam, quasi porro eos ab laborum, atque, culpa officia expedita doloribus! Corrupti facilis reprehenderit harum placeat rem commodi consequatur! Mollitia ratione aut asperiores ipsa ipsam, quia tempora nostrum magnam assumenda quibusdam repellendus. Hic, odio sit. Nisi impedit nam veniam, nemo exercitationem temporibus saepe perferendis? Tenetur molestias consectetur porro facilis numquam repellendus! Consequuntur iusto cumque nulla qui voluptatibus?</p>
        <p>
          Go back to{" "}
          <Link className="text-danger" to="/register">
            Register
          </Link>
        </p>
      </Container>
    );
};

export default Terms;