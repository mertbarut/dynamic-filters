# Field Technician Assistant

![ezgif-2-cf08888b07](https://github.com/mertbarut/dynamic-filters/assets/34005726/f74683b4-18ca-4aa9-bf15-68470cdab44a)

This app essentially renders a view that allows users to
filter displayed work order data. While some filters require input from
users, others can be predetermined by admin in the config file. The config file determines which filters require input, and by which logical
operators they are connected with. Filters can be combined with AND/OR logical operators. 

## Priorities

- Type safety
  All components and objects are statically typed with Typescript, significantly reducing the chance of object access related runtime errors.
- Generic, Data-driven Components
  Flatlists are preferred over Listviews. A factory design pattern is utilized to render the components.
- Fast development
  Inline styling via Gluestack UI was used to allow the developer to create the UI of the project as fast as possible.

## Other details

- Filter configuration is represented using a binary tree. Examples of filter configuration can be found in the mockData directory.
- A parsing algorithm maps configuration to an array, to see which filters require input from user. Utilization of an array over a binary tree allows a more efficient iteration over the filters that require input from the user.
- A recursive iteration algorithm that iterates through the tree, creates and combines expressions that JavaScript Engine uses for filtering.
- The global store (class) is setup using MobX. The store instance is constructed using
the filter configuration. The filter configuration is parsed and flattened into an array. This array becomes a reference point for keeping track of filters that require input.
- Methods that allow mutation of this array (setters) are made available, and can be accessed via the store in the component level.
- Almost every component is functional. Hooks are named and moved into their own files, ready to be tested.
- The hooks are for (1) mutating global state after user inputs data into a filter, (2) creating logical expressions to be evaluated when all filters that requires input have received input, and user pressed ‘Apply Filter’ button, (3) filtering data according to established filters.

## Todo

- Unit tests for functions and components
- Add the ability to change filter input more than once
- Show user the logical operators between the filters
