import { ChangeEvent, ComponentType, ReactNode } from 'react';
import { FormGroup, Label } from 'reactstrap';
import { useField } from './Form';

type Props<InputProps> = {
  as: ComponentType<InputProps>;
  inputProps: Omit<InputProps, 'onChange' | 'value' | 'name'>;
  children?: ReactNode;
  name: string;
  label?: string;
};

const Field = <InputProps,>({
  as: Component,
  inputProps,
  children,
  name,
  label,
}: Props<InputProps>) => {
  const [value, setValue] = useField(name);
  const onChange = (
    eventOrValue: string | ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => {
    if (typeof eventOrValue === 'string') {
      setValue(eventOrValue);
      return;
    }

    if ('checked' in eventOrValue.target && eventOrValue.target.type === 'checkbox') {
      setValue(eventOrValue.target.checked);
      return;
    }

    setValue(eventOrValue.target.value);
  };

  const newProps = {
    ...inputProps,
    onChange,
    value,
    name,
    id: name,
  } as InputProps;

  return (
    <FormGroup className="mb-3">
      {label && <Label htmlFor={name}>{label}</Label>}
      <Component {...newProps}>{children}</Component>
    </FormGroup>
  );
};

export default Field;
