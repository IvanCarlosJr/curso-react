import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `
    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
    Ea mollitia neque quod assumenda est minima, sequi cupiditate.
    Perspiciatis veniam quam ipsam at reiciendis distinctio ut
    exercitationem consequatur, quia quibusdam alias.
    `,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
