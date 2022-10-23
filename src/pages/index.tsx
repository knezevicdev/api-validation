import type { NextPage } from 'next';
import Form from '../components/form/Form';
import Field from '../components/form/Field';
import { Button, Container, Input } from 'reactstrap';
import AddressInput from '../components/inputs/AddressInput';
import submit from '../api/submit';

const Home: NextPage = () => {
  return (
    <Container className="p-3">
      <Form
        defaultValues={{
          firstName: '',
          lastName: '',
          email: '',
          address: '',
          dateOfBirth: '',
          subscribe: false,
        }}
        onSubmit={async (values) => {
          try {
            const response = await submit(values);
            console.log(response.name);
          } catch (e) {
            console.error('error while submitting...', e);
          }
        }}
      >
        <Field
          as={Input}
          inputProps={{
            type: 'text',
            placeholder: 'First Name',
          }}
          name="firstName"
          label="First Name"
        />
        <Field
          as={Input}
          inputProps={{
            type: 'text',
            placeholder: 'Last Name',
          }}
          name="lastName"
          label="Last Name"
        />
        <Field
          as={Input}
          inputProps={{
            type: 'email',
            placeholder: 'Email',
          }}
          name="email"
          label="Email"
        />
        <Field
          as={Input}
          inputProps={{
            type: 'date',
            placeholder: 'Date of birth',
          }}
          name="dateOfBirth"
          label="Date of birth"
        />
        <Field
          as={AddressInput}
          inputProps={{
            city: 'Eisenstadt',
            placeholder: 'Street',
          }}
          name="address"
          label="Street"
        />
        <Field
          as={Input}
          inputProps={{
            type: 'checkbox',
            placeholder: 'Email',
          }}
          name="subscribe"
          label="Subscribe to newsletter"
        />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Home;
