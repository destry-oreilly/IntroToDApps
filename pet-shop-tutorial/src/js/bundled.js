(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports={
  "contractName": "Adoption",
  "abi": [
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "adopters",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "admin",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "petId",
          "type": "uint256"
        }
      ],
      "name": "adopt",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "petId",
          "type": "uint256"
        }
      ],
      "name": "unadopt",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getAdopters",
      "outputs": [
        {
          "name": "",
          "type": "address[16]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.5.8+commit.23d335f2\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"constant\":true,\"inputs\":[],\"name\":\"getAdopters\",\"outputs\":[{\"name\":\"\",\"type\":\"address[16]\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"adopters\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"petId\",\"type\":\"uint256\"}],\"name\":\"adopt\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"petId\",\"type\":\"uint256\"}],\"name\":\"unadopt\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"admin\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"}],\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/Users/destry/code/destry-oreilly/IntroToDApps/pet-shop-tutorial/contracts/Adoption.sol\":\"Adoption\"},\"evmVersion\":\"petersburg\",\"libraries\":{},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"/Users/destry/code/destry-oreilly/IntroToDApps/pet-shop-tutorial/contracts/Adoption.sol\":{\"keccak256\":\"0x307f9e87b799f9530ae7a694e441657735c170fbaab841470c535e50f3619812\",\"urls\":[\"bzzr://b95e43c42a4014da817ccf12270689f012fb6f9448574bbbd408df23f807327b\"]}},\"version\":1}",
  "bytecode": "0x608060405234801561001057600080fd5b5033601060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506104aa806100616000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80633de4eb171461005c57806343ae80d3146100a25780638588b2c51461011057806390b8402914610152578063f851a44014610194575b600080fd5b6100646101de565b6040518082601060200280838360005b8381101561008f578082015181840152602081019050610074565b5050505090500191505060405180910390f35b6100ce600480360360208110156100b857600080fd5b810190808035906020019092919050505061025f565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61013c6004803603602081101561012657600080fd5b8101908080359060200190929190505050610292565b6040518082815260200191505060405180910390f35b61017e6004803603602081101561016857600080fd5b810190808035906020019092919050505061036a565b6040518082815260200191505060405180910390f35b61019c610435565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6101e661045b565b6000601080602002604051908101604052809291908260108015610255576020028201915b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001906001019080831161020b575b5050505050905090565b6000816010811061026c57fe5b016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008082101580156102a55750600f8211155b6102ae57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff16600083601081106102d357fe5b0160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461031557600080fd5b336000836010811061032357fe5b0160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550819050919050565b600080821015801561037d5750600f8211155b61038657600080fd5b601060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146103e057600080fd5b60008083601081106103ee57fe5b0160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550819050919050565b601060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60405180610200016040528060109060208202803883398082019150509050509056fea165627a7a723058208420f0ce591430a1b5d3552b9945e30916193458df703d7c4a7a7eeb39af65870029",
  "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100575760003560e01c80633de4eb171461005c57806343ae80d3146100a25780638588b2c51461011057806390b8402914610152578063f851a44014610194575b600080fd5b6100646101de565b6040518082601060200280838360005b8381101561008f578082015181840152602081019050610074565b5050505090500191505060405180910390f35b6100ce600480360360208110156100b857600080fd5b810190808035906020019092919050505061025f565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61013c6004803603602081101561012657600080fd5b8101908080359060200190929190505050610292565b6040518082815260200191505060405180910390f35b61017e6004803603602081101561016857600080fd5b810190808035906020019092919050505061036a565b6040518082815260200191505060405180910390f35b61019c610435565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6101e661045b565b6000601080602002604051908101604052809291908260108015610255576020028201915b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001906001019080831161020b575b5050505050905090565b6000816010811061026c57fe5b016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008082101580156102a55750600f8211155b6102ae57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff16600083601081106102d357fe5b0160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461031557600080fd5b336000836010811061032357fe5b0160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550819050919050565b600080821015801561037d5750600f8211155b61038657600080fd5b601060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146103e057600080fd5b60008083601081106103ee57fe5b0160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550819050919050565b601060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60405180610200016040528060109060208202803883398082019150509050509056fea165627a7a723058208420f0ce591430a1b5d3552b9945e30916193458df703d7c4a7a7eeb39af65870029",
  "sourceMap": "25:769:0:-;;;114:56;8:9:-1;5:2;;;30:1;27;20:12;5:2;114:56:0;153:10;145:5;;:18;;;;;;;;;;;;;;;;;;25:769;;;;;;",
  "deployedSourceMap": "25:769:0:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;25:769:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;694:96;;;:::i;:::-;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;694:96:0;;;;;;;;;;;;;;;;54:27;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;54:27:0;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;198:220;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;198:220:0;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;448:204;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;448:204:0;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;87:20;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;694:96;738:18;;:::i;:::-;775:8;768:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;694:96;:::o;54:27::-;;;;;;;;;;;;;;;;;;;;;;;:::o;198:220::-;241:4;274:1;265:5;:10;;:25;;;;;288:2;279:5;:11;;265:25;257:34;;;;;;336:3;309:31;;:8;318:5;309:15;;;;;;;;;;;;;;;;;;:31;;;301:40;;;;;;378:10;360:8;369:5;360:15;;;;;;;;;:28;;;;;;;;;;;;;;;;;;406:5;399:12;;198:220;;;:::o;448:204::-;493:4;526:1;517:5;:10;;:25;;;;;540:2;531:5;:11;;517:25;509:34;;;;;;575:5;;;;;;;;;;;561:19;;:10;:19;;;553:28;;;;;;618:3;592:8;601:5;592:15;;;;;;;;;:30;;;;;;;;;;;;;;;;;;640:5;633:12;;448:204;;;:::o;87:20::-;;;;;;;;;;;;;:::o;25:769::-;;;;;;;;;;;29:2:-1;21:6;17:15;117:4;105:10;97:6;88:34;148:4;140:6;136:17;126:27;;0:157;25:769:0;;;;:::o",
  "source": "pragma solidity ^0.5.0;\n\ncontract Adoption {\n    \n    address[16] public adopters;\n    address public admin;\n\n    constructor() public {\n        admin = msg.sender;\n    }\n\n    // Adopting a pet\n    function adopt(uint petId) public returns (uint) {\n        require(petId >= 0 && petId <= 15);\n        require(adopters[petId] == address(0x0));        \n\n        adopters[petId] = msg.sender;\n\n        return petId;\n    }\n\n    // UNadopting a pet\n    function unadopt(uint petId) public returns (uint) {\n        require(petId >= 0 && petId <= 15);\n        require(msg.sender == admin);\n\n        adopters[petId] = address(0x0);\n\n        return petId;\n    }\n\n    \n    // Retrieving the adopters\n    function getAdopters() public view returns (address[16] memory) {\n        return adopters;\n    }\n \n}\n",
  "sourcePath": "/Users/destry/code/destry-oreilly/IntroToDApps/pet-shop-tutorial/contracts/Adoption.sol",
  "ast": {
    "absolutePath": "/Users/destry/code/destry-oreilly/IntroToDApps/pet-shop-tutorial/contracts/Adoption.sol",
    "exportedSymbols": {
      "Adoption": [
        99
      ]
    },
    "id": 100,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1,
        "literals": [
          "solidity",
          "^",
          "0.5",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:0"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 99,
        "linearizedBaseContracts": [
          99
        ],
        "name": "Adoption",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 5,
            "name": "adopters",
            "nodeType": "VariableDeclaration",
            "scope": 99,
            "src": "54:27:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_address_$16_storage",
              "typeString": "address[16]"
            },
            "typeName": {
              "baseType": {
                "id": 2,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "54:7:0",
                "stateMutability": "nonpayable",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "id": 4,
              "length": {
                "argumentTypes": null,
                "hexValue": "3136",
                "id": 3,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "62:2:0",
                "subdenomination": null,
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_16_by_1",
                  "typeString": "int_const 16"
                },
                "value": "16"
              },
              "nodeType": "ArrayTypeName",
              "src": "54:11:0",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_address_$16_storage_ptr",
                "typeString": "address[16]"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 7,
            "name": "admin",
            "nodeType": "VariableDeclaration",
            "scope": 99,
            "src": "87:20:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 6,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "87:7:0",
              "stateMutability": "nonpayable",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 15,
              "nodeType": "Block",
              "src": "135:35:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 13,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 10,
                      "name": "admin",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7,
                      "src": "145:5:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 11,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 171,
                        "src": "153:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 12,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "153:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "src": "145:18:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 14,
                  "nodeType": "ExpressionStatement",
                  "src": "145:18:0"
                }
              ]
            },
            "documentation": null,
            "id": 16,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "125:2:0"
            },
            "returnParameters": {
              "id": 9,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "135:0:0"
            },
            "scope": 99,
            "src": "114:56:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 52,
              "nodeType": "Block",
              "src": "247:171:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 30,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 26,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 24,
                            "name": "petId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 18,
                            "src": "265:5:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">=",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 25,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "274:1:0",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "265:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "&&",
                        "rightExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 29,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 27,
                            "name": "petId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 18,
                            "src": "279:5:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "<=",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "3135",
                            "id": 28,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "288:2:0",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_15_by_1",
                              "typeString": "int_const 15"
                            },
                            "value": "15"
                          },
                          "src": "279:11:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "265:25:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 23,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        174,
                        175
                      ],
                      "referencedDeclaration": 174,
                      "src": "257:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 31,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "257:34:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 32,
                  "nodeType": "ExpressionStatement",
                  "src": "257:34:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 40,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 34,
                            "name": "adopters",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5,
                            "src": "309:8:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_address_$16_storage",
                              "typeString": "address[16] storage ref"
                            }
                          },
                          "id": 36,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 35,
                            "name": "petId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 18,
                            "src": "318:5:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "309:15:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "hexValue": "307830",
                              "id": 38,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "336:3:0",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0x0"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              }
                            ],
                            "id": 37,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "328:7:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 39,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "328:12:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "src": "309:31:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 33,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        174,
                        175
                      ],
                      "referencedDeclaration": 174,
                      "src": "301:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 41,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "301:40:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 42,
                  "nodeType": "ExpressionStatement",
                  "src": "301:40:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 48,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 43,
                        "name": "adopters",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5,
                        "src": "360:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$16_storage",
                          "typeString": "address[16] storage ref"
                        }
                      },
                      "id": 45,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 44,
                        "name": "petId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 18,
                        "src": "369:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "360:15:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 46,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 171,
                        "src": "378:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 47,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "378:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "src": "360:28:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 49,
                  "nodeType": "ExpressionStatement",
                  "src": "360:28:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 50,
                    "name": "petId",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 18,
                    "src": "406:5:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 22,
                  "id": 51,
                  "nodeType": "Return",
                  "src": "399:12:0"
                }
              ]
            },
            "documentation": null,
            "id": 53,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "adopt",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 19,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 18,
                  "name": "petId",
                  "nodeType": "VariableDeclaration",
                  "scope": 53,
                  "src": "213:10:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "213:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "212:12:0"
            },
            "returnParameters": {
              "id": 22,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 21,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 53,
                  "src": "241:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 20,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "241:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "240:6:0"
            },
            "scope": 99,
            "src": "198:220:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 87,
              "nodeType": "Block",
              "src": "499:153:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 67,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 63,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 61,
                            "name": "petId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 55,
                            "src": "517:5:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">=",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 62,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "526:1:0",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "517:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "&&",
                        "rightExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 66,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 64,
                            "name": "petId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 55,
                            "src": "531:5:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "<=",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "3135",
                            "id": 65,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "540:2:0",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_15_by_1",
                              "typeString": "int_const 15"
                            },
                            "value": "15"
                          },
                          "src": "531:11:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "517:25:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 60,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        174,
                        175
                      ],
                      "referencedDeclaration": 174,
                      "src": "509:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 68,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "509:34:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 69,
                  "nodeType": "ExpressionStatement",
                  "src": "509:34:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 74,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 71,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 171,
                            "src": "561:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 72,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "561:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 73,
                          "name": "admin",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7,
                          "src": "575:5:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "561:19:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 70,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        174,
                        175
                      ],
                      "referencedDeclaration": 174,
                      "src": "553:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 75,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "553:28:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 76,
                  "nodeType": "ExpressionStatement",
                  "src": "553:28:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 83,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 77,
                        "name": "adopters",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5,
                        "src": "592:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$16_storage",
                          "typeString": "address[16] storage ref"
                        }
                      },
                      "id": 79,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 78,
                        "name": "petId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 55,
                        "src": "601:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "592:15:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "hexValue": "307830",
                          "id": 81,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "618:3:0",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0x0"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          }
                        ],
                        "id": 80,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "610:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": "address"
                      },
                      "id": 82,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "610:12:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "src": "592:30:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 84,
                  "nodeType": "ExpressionStatement",
                  "src": "592:30:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 85,
                    "name": "petId",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 55,
                    "src": "640:5:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 59,
                  "id": 86,
                  "nodeType": "Return",
                  "src": "633:12:0"
                }
              ]
            },
            "documentation": null,
            "id": 88,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "unadopt",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 56,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 55,
                  "name": "petId",
                  "nodeType": "VariableDeclaration",
                  "scope": 88,
                  "src": "465:10:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 54,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "465:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "464:12:0"
            },
            "returnParameters": {
              "id": 59,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 58,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 88,
                  "src": "493:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 57,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "493:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "492:6:0"
            },
            "scope": 99,
            "src": "448:204:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 97,
              "nodeType": "Block",
              "src": "758:32:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 95,
                    "name": "adopters",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 5,
                    "src": "775:8:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$16_storage",
                      "typeString": "address[16] storage ref"
                    }
                  },
                  "functionReturnParameters": 94,
                  "id": 96,
                  "nodeType": "Return",
                  "src": "768:15:0"
                }
              ]
            },
            "documentation": null,
            "id": 98,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getAdopters",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 89,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "714:2:0"
            },
            "returnParameters": {
              "id": 94,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 93,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 98,
                  "src": "738:18:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$16_memory_ptr",
                    "typeString": "address[16]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 90,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "738:7:0",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 92,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "3136",
                      "id": 91,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "746:2:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_16_by_1",
                        "typeString": "int_const 16"
                      },
                      "value": "16"
                    },
                    "nodeType": "ArrayTypeName",
                    "src": "738:11:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$16_storage_ptr",
                      "typeString": "address[16]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "737:20:0"
            },
            "scope": 99,
            "src": "694:96:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 100,
        "src": "25:769:0"
      }
    ],
    "src": "0:795:0"
  },
  "legacyAST": {
    "absolutePath": "/Users/destry/code/destry-oreilly/IntroToDApps/pet-shop-tutorial/contracts/Adoption.sol",
    "exportedSymbols": {
      "Adoption": [
        99
      ]
    },
    "id": 100,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1,
        "literals": [
          "solidity",
          "^",
          "0.5",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:0"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 99,
        "linearizedBaseContracts": [
          99
        ],
        "name": "Adoption",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 5,
            "name": "adopters",
            "nodeType": "VariableDeclaration",
            "scope": 99,
            "src": "54:27:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_address_$16_storage",
              "typeString": "address[16]"
            },
            "typeName": {
              "baseType": {
                "id": 2,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "54:7:0",
                "stateMutability": "nonpayable",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "id": 4,
              "length": {
                "argumentTypes": null,
                "hexValue": "3136",
                "id": 3,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "62:2:0",
                "subdenomination": null,
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_16_by_1",
                  "typeString": "int_const 16"
                },
                "value": "16"
              },
              "nodeType": "ArrayTypeName",
              "src": "54:11:0",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_address_$16_storage_ptr",
                "typeString": "address[16]"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 7,
            "name": "admin",
            "nodeType": "VariableDeclaration",
            "scope": 99,
            "src": "87:20:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 6,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "87:7:0",
              "stateMutability": "nonpayable",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 15,
              "nodeType": "Block",
              "src": "135:35:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 13,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 10,
                      "name": "admin",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7,
                      "src": "145:5:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 11,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 171,
                        "src": "153:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 12,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "153:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "src": "145:18:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 14,
                  "nodeType": "ExpressionStatement",
                  "src": "145:18:0"
                }
              ]
            },
            "documentation": null,
            "id": 16,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "125:2:0"
            },
            "returnParameters": {
              "id": 9,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "135:0:0"
            },
            "scope": 99,
            "src": "114:56:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 52,
              "nodeType": "Block",
              "src": "247:171:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 30,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 26,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 24,
                            "name": "petId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 18,
                            "src": "265:5:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">=",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 25,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "274:1:0",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "265:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "&&",
                        "rightExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 29,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 27,
                            "name": "petId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 18,
                            "src": "279:5:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "<=",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "3135",
                            "id": 28,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "288:2:0",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_15_by_1",
                              "typeString": "int_const 15"
                            },
                            "value": "15"
                          },
                          "src": "279:11:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "265:25:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 23,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        174,
                        175
                      ],
                      "referencedDeclaration": 174,
                      "src": "257:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 31,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "257:34:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 32,
                  "nodeType": "ExpressionStatement",
                  "src": "257:34:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 40,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 34,
                            "name": "adopters",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5,
                            "src": "309:8:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_address_$16_storage",
                              "typeString": "address[16] storage ref"
                            }
                          },
                          "id": 36,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 35,
                            "name": "petId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 18,
                            "src": "318:5:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "309:15:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "hexValue": "307830",
                              "id": 38,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "336:3:0",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0x0"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              }
                            ],
                            "id": 37,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "328:7:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 39,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "328:12:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "src": "309:31:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 33,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        174,
                        175
                      ],
                      "referencedDeclaration": 174,
                      "src": "301:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 41,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "301:40:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 42,
                  "nodeType": "ExpressionStatement",
                  "src": "301:40:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 48,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 43,
                        "name": "adopters",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5,
                        "src": "360:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$16_storage",
                          "typeString": "address[16] storage ref"
                        }
                      },
                      "id": 45,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 44,
                        "name": "petId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 18,
                        "src": "369:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "360:15:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 46,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 171,
                        "src": "378:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 47,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "378:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "src": "360:28:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 49,
                  "nodeType": "ExpressionStatement",
                  "src": "360:28:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 50,
                    "name": "petId",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 18,
                    "src": "406:5:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 22,
                  "id": 51,
                  "nodeType": "Return",
                  "src": "399:12:0"
                }
              ]
            },
            "documentation": null,
            "id": 53,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "adopt",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 19,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 18,
                  "name": "petId",
                  "nodeType": "VariableDeclaration",
                  "scope": 53,
                  "src": "213:10:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "213:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "212:12:0"
            },
            "returnParameters": {
              "id": 22,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 21,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 53,
                  "src": "241:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 20,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "241:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "240:6:0"
            },
            "scope": 99,
            "src": "198:220:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 87,
              "nodeType": "Block",
              "src": "499:153:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 67,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 63,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 61,
                            "name": "petId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 55,
                            "src": "517:5:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">=",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 62,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "526:1:0",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "517:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "&&",
                        "rightExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 66,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 64,
                            "name": "petId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 55,
                            "src": "531:5:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "<=",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "3135",
                            "id": 65,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "540:2:0",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_15_by_1",
                              "typeString": "int_const 15"
                            },
                            "value": "15"
                          },
                          "src": "531:11:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "517:25:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 60,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        174,
                        175
                      ],
                      "referencedDeclaration": 174,
                      "src": "509:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 68,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "509:34:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 69,
                  "nodeType": "ExpressionStatement",
                  "src": "509:34:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 74,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 71,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 171,
                            "src": "561:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 72,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "561:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 73,
                          "name": "admin",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7,
                          "src": "575:5:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "561:19:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 70,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        174,
                        175
                      ],
                      "referencedDeclaration": 174,
                      "src": "553:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 75,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "553:28:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 76,
                  "nodeType": "ExpressionStatement",
                  "src": "553:28:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 83,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 77,
                        "name": "adopters",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5,
                        "src": "592:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$16_storage",
                          "typeString": "address[16] storage ref"
                        }
                      },
                      "id": 79,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 78,
                        "name": "petId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 55,
                        "src": "601:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "592:15:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "hexValue": "307830",
                          "id": 81,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "618:3:0",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0x0"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          }
                        ],
                        "id": 80,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "610:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": "address"
                      },
                      "id": 82,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "610:12:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "src": "592:30:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 84,
                  "nodeType": "ExpressionStatement",
                  "src": "592:30:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 85,
                    "name": "petId",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 55,
                    "src": "640:5:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 59,
                  "id": 86,
                  "nodeType": "Return",
                  "src": "633:12:0"
                }
              ]
            },
            "documentation": null,
            "id": 88,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "unadopt",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 56,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 55,
                  "name": "petId",
                  "nodeType": "VariableDeclaration",
                  "scope": 88,
                  "src": "465:10:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 54,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "465:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "464:12:0"
            },
            "returnParameters": {
              "id": 59,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 58,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 88,
                  "src": "493:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 57,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "493:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "492:6:0"
            },
            "scope": 99,
            "src": "448:204:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 97,
              "nodeType": "Block",
              "src": "758:32:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 95,
                    "name": "adopters",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 5,
                    "src": "775:8:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$16_storage",
                      "typeString": "address[16] storage ref"
                    }
                  },
                  "functionReturnParameters": 94,
                  "id": 96,
                  "nodeType": "Return",
                  "src": "768:15:0"
                }
              ]
            },
            "documentation": null,
            "id": 98,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getAdopters",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 89,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "714:2:0"
            },
            "returnParameters": {
              "id": 94,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 93,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 98,
                  "src": "738:18:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$16_memory_ptr",
                    "typeString": "address[16]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 90,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "738:7:0",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 92,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "3136",
                      "id": 91,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "746:2:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_16_by_1",
                        "typeString": "int_const 16"
                      },
                      "value": "16"
                    },
                    "nodeType": "ArrayTypeName",
                    "src": "738:11:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$16_storage_ptr",
                      "typeString": "address[16]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "737:20:0"
            },
            "scope": 99,
            "src": "694:96:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 100,
        "src": "25:769:0"
      }
    ],
    "src": "0:795:0"
  },
  "compiler": {
    "name": "solc",
    "version": "0.5.8+commit.23d335f2.Emscripten.clang"
  },
  "networks": {
    "42": {
      "events": {},
      "links": {},
      "address": "0x1D94dd299f8B4D6Cc166F092aEEe6C9C5EaC2A06",
      "transactionHash": "0xaf8a0e5232809b5741f504c4104ee086b97f31da01e19198add7ade4fe552d3e"
    },
    "5777": {
      "events": {},
      "links": {},
      "address": "0xa1237CC6a288BAD4d4b86baFc214f54CB6075EDc",
      "transactionHash": "0xf09a8aaac79cc8759fa16dd03f46d635d3bbd85d6720d584d3647f6b2f05eb9d"
    }
  },
  "schemaVersion": "3.0.15",
  "updatedAt": "2019-09-09T17:03:28.201Z",
  "devdoc": {
    "methods": {}
  },
  "userdoc": {
    "methods": {}
  }
}
},{}],2:[function(require,module,exports){
App = {
    web3Provider: null,
    contracts: {},

    init: async function() {
        // Load pets.
        var data = require('../pets.json');        
        var petsRow = $('#petsRow');
        var petTemplate = $('#petTemplate');

        for (i = 0; i < data.length; i ++) {
            petTemplate.find('.panel-title').text(data[i].name);
            petTemplate.find('img').attr('src', data[i].picture);
            petTemplate.find('.pet-breed').text(data[i].breed);
            petTemplate.find('.pet-age').text(data[i].age);
            petTemplate.find('.pet-location').text(data[i].location);
            petTemplate.find('.btn-adopt').attr('data-id', data[i].id);

            petsRow.append(petTemplate.html());
        };
        
        return await App.initWeb3();
    },

    initWeb3: async function() {
        // Modern dapp browsers...
        if (window.ethereum) {
            App.web3Provider = window.ethereum;
            try {
                // Request account access
                await window.ethereum.enable();
            } catch (error) {
                // User denied account access...
                console.error("User denied account access")
            }
        }
        // Legacy dapp browsers...
        else if (window.web3) {
            App.web3Provider = window.web3.currentProvider;
        }
        // If no injected web3 instance is detected, fall back to Ganache
        else {
            console.log('Warning: web3 not included in browser');            
            App.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
        }
        web3 = new Web3(App.web3Provider);

        return App.initContract();
    },

    initContract: function() {
        var AdoptionArtifact = require('../../build/contracts/Adoption.json');        
        // Get the necessary contract artifact file and instantiate it with truffle-contract
        App.contracts.Adoption = TruffleContract(AdoptionArtifact);

        // Set the provider for our contract
        App.contracts.Adoption.setProvider(App.web3Provider);

        App.markAdopted();

        App.setAdmin();
        
        // Use our contract to retrieve and mark the adopted pets
        return App.bindEvents();        
    },

    bindEvents: function() {
        $(document).on('click', '.btn-adopt', App.handleAdopt);
        $(document).on('click', '.btn-unadopt', App.handleUnadopt);        
    },

    setAdmin: function() {
        var adoptionInstance;

        App.contracts.Adoption.deployed().then(function(instance) {
            adoptionInstance = instance;

            return adoptionInstance.admin.call();
        }).then(function(adminAddress) {
            if (adminAddress !== web3.eth.accounts[0]) {
                $('.badge-admin').hide();
                $('.btn-unadopt').hide();
            }
        }).catch(function(err) {
            console.log(err.message);
        });
    },
    markAdopted: function(adopters, account) {
        var adoptionInstance;

        App.contracts.Adoption.deployed().then(function(instance) {
            adoptionInstance = instance;

            return adoptionInstance.getAdopters.call();
        }).then(function(adopters) {
            for (i = 0; i < adopters.length; i++) {
                if (adopters[i] !== '0x0000000000000000000000000000000000000000') {
                    $('.panel-pet').eq(i).find('button').filter('.btn-adopt').text('Success').attr('disabled', true);
                    $('.panel-pet').eq(i).find('button').filter('.btn-unadopt').attr('disabled', false);                    
                }
            }
        }).catch(function(err) {
            console.log(err.message);
        });
    },

    handleAdopt: function(event) {
        event.preventDefault();

        var petId = parseInt($(event.target).data('id'));

        var adoptionInstance;

        web3.eth.getAccounts(function(error, accounts) {
            if (error) {
                console.log(error);
            }

            var account = accounts[0];

            App.contracts.Adoption.deployed().then(function(instance) {
                adoptionInstance = instance;

                // Execute adopt as a transaction by sending account
                return adoptionInstance.adopt(petId, {from: account});
            }).then(function(result) {
                return App.markAdopted();
            }).catch(function(err) {
                console.log(err.message);
            });
        });
    },
    handleUnadopt: function(event) {
        event.preventDefault();

        var petId = parseInt($(event.target).data('id'));

        var adoptionInstance;

        web3.eth.getAccounts(function(error, accounts) {
            if (error) {
                console.log(error);
            }

            var account = accounts[0];

            App.contracts.Adoption.deployed().then(function(instance) {
                adoptionInstance = instance;

                // Execute unadopt
                return adoptionInstance.unadopt(petId, {from: account});
            }).then(function(result) {
                return App.markAdopted();
            }).catch(function(err) {
                console.log(err.message);
            });
        });
    }

};

$(function() {
    $(window).load(function() {
        App.init();
    });
});

},{"../../build/contracts/Adoption.json":1,"../pets.json":3}],3:[function(require,module,exports){
module.exports=[
  {
    "id": 0,
    "name": "Frieda",
    "picture": "images/scottish-terrier.jpeg",
    "age": 3,
    "breed": "Scottish Terrier",
    "location": "Lisco, Alabama"
  },
  {
    "id": 1,
    "name": "Gina",
    "picture": "images/scottish-terrier.jpeg",
    "age": 3,
    "breed": "Scottish Terrier",
    "location": "Tooleville, West Virginia"
  },
  {
    "id": 2,
    "name": "Collins",
    "picture": "images/french-bulldog.jpeg",
    "age": 2,
    "breed": "French Bulldog",
    "location": "Freeburn, Idaho"
  },
  {
    "id": 3,
    "name": "Melissa",
    "picture": "images/boxer.jpeg",
    "age": 2,
    "breed": "Boxer",
    "location": "Camas, Pennsylvania"
  },
  {
    "id": 4,
    "name": "Jeanine",
    "picture": "images/french-bulldog.jpeg",
    "age": 2,
    "breed": "French Bulldog",
    "location": "Gerber, South Dakota"
  },
  {
    "id": 5,
    "name": "Elvia",
    "picture": "images/french-bulldog.jpeg",
    "age": 3,
    "breed": "French Bulldog",
    "location": "Innsbrook, Illinois"
  },
  {
    "id": 6,
    "name": "Latisha",
    "picture": "images/golden-retriever.jpeg",
    "age": 3,
    "breed": "Golden Retriever",
    "location": "Soudan, Louisiana"
  },
  {
    "id": 7,
    "name": "Coleman",
    "picture": "images/golden-retriever.jpeg",
    "age": 3,
    "breed": "Golden Retriever",
    "location": "Jacksonwald, Palau"
  },
  {
    "id": 8,
    "name": "Nichole",
    "picture": "images/french-bulldog.jpeg",
    "age": 2,
    "breed": "French Bulldog",
    "location": "Honolulu, Hawaii"
  },
  {
    "id": 9,
    "name": "Fran",
    "picture": "images/boxer.jpeg",
    "age": 3,
    "breed": "Boxer",
    "location": "Matheny, Utah"
  },
  {
    "id": 10,
    "name": "Leonor",
    "picture": "images/boxer.jpeg",
    "age": 2,
    "breed": "Boxer",
    "location": "Tyhee, Indiana"
  },
  {
    "id": 11,
    "name": "Dean",
    "picture": "images/scottish-terrier.jpeg",
    "age": 3,
    "breed": "Scottish Terrier",
    "location": "Windsor, Montana"
  },
  {
    "id": 12,
    "name": "Stevenson",
    "picture": "images/french-bulldog.jpeg",
    "age": 3,
    "breed": "French Bulldog",
    "location": "Kingstowne, Nevada"
  },
  {
    "id": 13,
    "name": "Kristina",
    "picture": "images/golden-retriever.jpeg",
    "age": 4,
    "breed": "Golden Retriever",
    "location": "Sultana, Massachusetts"
  },
  {
    "id": 14,
    "name": "Ethel",
    "picture": "images/golden-retriever.jpeg",
    "age": 2,
    "breed": "Golden Retriever",
    "location": "Broadlands, Oregon"
  },
  {
    "id": 15,
    "name": "Terry",
    "picture": "images/golden-retriever.jpeg",
    "age": 2,
    "breed": "Golden Retriever",
    "location": "Dawn, Wisconsin"
  }
]

},{}]},{},[2]);
