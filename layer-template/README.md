# layer-template-serverless

This template can be used to setup layers for lambda using serverless.yml

This template demonstrate how to use node_modules as separate layer. We are using `moment` and `axios` as layers. instead of adding them directly to lambda we are install them to layers.

Note the physical directory structure and in sreverless.yml
once we create layer we can attach to lambda function using ARN as done in serverless.yml

Other binary layers can also be created. like os utilties.

Each lambda can attach 5 layers. and each layer have limit of 50MB as each lambda has 50 MB.
So its 5x50=250MB layer possible size.

