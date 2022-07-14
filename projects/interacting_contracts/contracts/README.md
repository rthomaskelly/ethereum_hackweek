An interface cannot have a constructor while an abstract contract can implement one.  
An interface cannot define state variables but an abstract contract can.  
An inheriting contract must implement all the functions defined in an interface while in an abstract contract the inheriting contract must implement at least one function of the abstract contract.  
An abstract contract can inherit from another contract or abstract contract while an interface cannot inherit from a contract or another interface.    


seems like abstracts are mixins and interfaces are parent classes with abstract methods that you HAVE to redefine