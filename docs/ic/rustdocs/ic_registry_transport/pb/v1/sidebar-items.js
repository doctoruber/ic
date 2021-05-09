initSidebarItems({"mod":[["registry_error","Nested message and enum types in `RegistryError`."],["registry_mutation","Nested message and enum types in `RegistryMutation`."]],"struct":[["CertifiedResponse","Message encoding a response to any *_certified method call."],["Precondition","A precondition on the version at which the value of a given key was last mutated."],["RegistryAtomicMutateRequest","Message corresponding to a list of mutations to apply, atomically, to the registry canister. If any of the mutations fails, the whole operation will fail."],["RegistryAtomicMutateResponse","Message corresponding to the response of an atomic_mutate request. If any of mutations failed the corresponding errors will be reflected in 'errors'. Otherwise 'version' will contain the version under which all the mutations were applied."],["RegistryDelta","A sequence of changes made to a key in the registry."],["RegistryError","Message corresponding to an error while performing an operation on the registry."],["RegistryGetChangesSinceRequest","Message to retrieve all the changes from the registry since 'version'."],["RegistryGetChangesSinceResponse","Message corresponding to the response from the registry canister to a get_latest_version() request."],["RegistryGetLatestVersionResponse","Message corresponding to the response from the canister to a get_latest_version() request."],["RegistryGetValueRequest","Message to retrieve a version of some registry key from the registry canister."],["RegistryGetValueResponse","Message corresponding to the response from the canister to a get_value() request."],["RegistryMutation","A single mutation in the registry."],["RegistryValue","A single change made to a key in the registry."]]});