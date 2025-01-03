
import React, { useEffect, useState } from "react";
import { ethers } from 'ethers';

import {
    Box,
    Button,
    Container,
    Divider,
    Grid,
    Paper,
    Typography,
} from "@mui/material";
import {
    IsMobileWidth,
    IsTabletWidth,
} from "../../../components/common/utill/utils";
import clsx from "clsx";
import { useStyle } from "./create.token.form.style";
import CircularImageCard from "../../../components/common/circular.image.card/circular.image.card";
import MaterialSelectDropdown from "../../../components/common/material.select.dropdown/material.select.dropdown";
import SiteLabelTextField from "../../../components/common/site.label.textfield/site.label.textfield";
import SwitchButton from "../switch.button/switch.button";
import TermsAndConditionSelectionDialog from "../../../components/common/terms.and.conditions.selection.dialog/terms.and.conditions.selection.dialog";
import { isFormDetails } from "./validator";



const CreateTokenForm = (props) => {
    const { label, description, title } = props;
    const mobileWidth = IsMobileWidth();
    const tabletWidth = IsTabletWidth();
    const classes = useStyle();
    const [state, setState] = useState({

        tokenType: "HELLO_KRC20",
        network: 'kaichain_testnet',
        // price: '',
        tokenName: "",
        tokenSymbol: "",
        tokenDecimals: 18,
        initialSupply: 1000,
        maxSupply: 1000,
        burnable: false,
        mintable: false,
        tokenRecover: false,
        deflationary: false,
        taxable: false,
        KRC1363: false,
        supplyType: "Fixed",
        accessType: "None",
        transferType: "Unstoppable",
        burnFee: "",
        taxFee: "",
        taxAddress: "",
        viewSourceCode: true,
        removeCopyright: false,
        isDisabledTokenDecimal: true,
        isDisabledInitialSupply: true,
        isDisabledMaxSupply: true,
        validationResult: {
            isValidTokenName: true,
            isValidTokenSymbol: true,
            isValidTokenDecimals: true,
            isValidInitialSupply: true,
            isValidMaxSupply: true,
            isValidBurnFee: true,
            isValidTaxFee: true,
            isValidTaxAddress: true,
        },
    });

    const KAICHAIN_TESTNET = [
        { value: "KAICHAIN_TESTNET", label: "KaiChain Testnet" },
    ];

    const [contractAddress, setContractAddress] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const abi = [
        {
            "inputs": [
                { "internalType": "string", "name": "_name", "type": "string" },
                { "internalType": "string", "name": "_symbol", "type": "string" }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }],
            "name": "approve",
            "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }],
            "name": "balanceOf",
            "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "decimals",
            "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "name",
            "outputs": [{ "internalType": "string", "name": "", "type": "string" }],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "symbol",
            "outputs": [{ "internalType": "string", "name": "", "type": "string" }],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "totalSupply",
            "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }],
            "name": "transfer",
            "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }],
            "name": "transferFrom",
            "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "anonymous": false,
            "inputs": [
                { "indexed": true, "internalType": "address", "name": "owner", "type": "address" },
                { "indexed": true, "internalType": "address", "name": "spender", "type": "address" },
                { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }
            ],
            "name": "Approval",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                { "indexed": true, "internalType": "address", "name": "from", "type": "address" },
                { "indexed": true, "internalType": "address", "name": "to", "type": "address" },
                { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }
            ],
            "name": "Transfer",
            "type": "event"
        },
        {
            "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "needed", "type": "uint256" }],
            "name": "ERC20InsufficientAllowance",
            "type": "error"
        },
        {
            "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "uint256", "name": "balance", "type": "uint256" }, { "internalType": "uint256", "name": "needed", "type": "uint256" }],
            "name": "ERC20InsufficientBalance",
            "type": "error"
        },
        {
            "inputs": [{ "internalType": "address", "name": "approver", "type": "address" }],
            "name": "ERC20InvalidApprover",
            "type": "error"
        },
        {
            "inputs": [{ "internalType": "address", "name": "receiver", "type": "address" }],
            "name": "ERC20InvalidReceiver",
            "type": "error"
        },
        {
            "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }],
            "name": "ERC20InvalidSender",
            "type": "error"
        },
        {
            "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }],
            "name": "ERC20InvalidSpender",
            "type": "error"
        }
    ];

    const SendFormData = async (e) => {
        e.preventDefault();
        const validationResult = isFormDetails(state);
        setState({ ...state, validationResult: validationResult });
        // Proceed if the form is valid
        if (validationResult.allValid) {
            try {
                setIsLoading(true); // Show loading state
                // Assuming you're using ethers.js to interact with a blockchain or another API
                // Example: Contract interaction or API call goes here
                // For example, assuming you're sending the form data to a blockchain contract
                const provider = new ethers.BrowserProvider(window.ethereum);
                const signer = await provider.getSigner();
                // Define contract ABI and bytecode (similar to the deployment example)
                const contractABI = abi;
                const contractBytecode = '608060405234801561000f575f80fd5b506040516112e93803806112e9833981810160405281019061003191906101a9565b81818160039081610042919061042c565b508060049081610052919061042c565b50505050506104fb565b5f604051905090565b5f80fd5b5f80fd5b5f80fd5b5f80fd5b5f601f19601f8301169050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b6100bb82610075565b810181811067ffffffffffffffff821117156100da576100d9610085565b5b80604052505050565b5f6100ec61005c565b90506100f882826100b2565b919050565b5f67ffffffffffffffff82111561011757610116610085565b5b61012082610075565b9050602081019050919050565b8281835e5f83830152505050565b5f61014d610148846100fd565b6100e3565b90508281526020810184848401111561016957610168610071565b5b61017484828561012d565b509392505050565b5f82601f8301126101905761018f61006d565b5b81516101a084826020860161013b565b91505092915050565b5f80604083850312156101bf576101be610065565b5b5f83015167ffffffffffffffff8111156101dc576101db610069565b5b6101e88582860161017c565b925050602083015167ffffffffffffffff81111561020957610208610069565b5b6102158582860161017c565b9150509250929050565b5f81519050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f600282049050600182168061026d57607f821691505b6020821081036102805761027f610229565b5b50919050565b5f819050815f5260205f209050919050565b5f6020601f8301049050919050565b5f82821b905092915050565b5f600883026102e27fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826102a7565b6102ec86836102a7565b95508019841693508086168417925050509392505050565b5f819050919050565b5f819050919050565b5f61033061032b61032684610304565b61030d565b610304565b9050919050565b5f819050919050565b61034983610316565b61035d61035582610337565b8484546102b3565b825550505050565b5f90565b610371610365565b61037c818484610340565b505050565b5b8181101561039f576103945f82610369565b600181019050610382565b5050565b601f8211156103e4576103b581610286565b6103be84610298565b810160208510156103cd578190505b6103e16103d985610298565b830182610381565b50505b505050565b5f82821c905092915050565b5f6104045f19846008026103e9565b1980831691505092915050565b5f61041c83836103f5565b9150826002028217905092915050565b6104358261021f565b67ffffffffffffffff81111561044e5761044d610085565b5b6104588254610256565b6104638282856103a3565b5f60209050601f831160018114610494575f8415610482578287015190505b61048c8582610411565b8655506104f3565b601f1984166104a286610286565b5f5b828110156104c9578489015182556001820191506020850194506020810190506104a4565b868310156104e657848901516104e2601f8916826103f5565b8355505b6001600288020188555050505b505050505050565b610de1806105085f395ff3fe608060405234801561000f575f80fd5b5060043610610091575f3560e01c8063313ce56711610064578063313ce5671461013157806370a082311461014f57806395d89b411461017f578063a9059cbb1461019d578063dd62ed3e146101cd57610091565b806306fdde0314610095578063095ea7b3146100b357806318160ddd146100e357806323b872dd14610101575b5f80fd5b61009d6101fd565b6040516100aa9190610a5a565b60405180910390f35b6100cd60048036038101906100c89190610b0b565b61028d565b6040516100da9190610b63565b60405180910390f35b6100eb6102af565b6040516100f89190610b8b565b60405180910390f35b61011b60048036038101906101169190610ba4565b6102b8565b6040516101289190610b63565b60405180910390f35b6101396102e6565b6040516101469190610c0f565b60405180910390f35b61016960048036038101906101649190610c28565b6102ee565b6040516101769190610b8b565b60405180910390f35b610187610333565b6040516101949190610a5a565b60405180910390f35b6101b760048036038101906101b29190610b0b565b6103c3565b6040516101c49190610b63565b60405180910390f35b6101e760048036038101906101e29190610c53565b6103e5565b6040516101f49190610b8b565b60405180910390f35b60606003805461020c90610cbe565b80601f016020809104026020016040519081016040528092919081815260200182805461023890610cbe565b80156102835780601f1061025a57610100808354040283529160200191610283565b820191905f5260205f20905b81548152906001019060200180831161026657829003601f168201915b5050505050905090565b5f80610297610467565b90506102a481858561046e565b600191505092915050565b5f600254905090565b5f806102c2610467565b90506102cf858285610480565b6102da858585610512565b60019150509392505050565b5f6012905090565b5f805f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20549050919050565b60606004805461034290610cbe565b80601f016020809104026020016040519081016040528092919081815260200182805461036e90610cbe565b80156103b95780601f10610390576101008083540402835291602001916103b9565b820191905f5260205f20905b81548152906001019060200180831161039c57829003601f168201915b5050505050905090565b5f806103cd610467565b90506103da818585610512565b600191505092915050565b5f60015f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2054905092915050565b5f33905090565b61047b8383836001610602565b505050565b5f61048b84846103e5565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff811461050c57818110156104fd578281836040517ffb8f41b20000000000000000000000000000000000000000000000000000000081526004016104f493929190610cfd565b60405180910390fd5b61050b84848484035f610602565b5b50505050565b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610582575f6040517f96c6fd1e0000000000000000000000000000000000000000000000000000000081526004016105799190610d32565b60405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036105f2575f6040517fec442f050000000000000000000000000000000000000000000000000000000081526004016105e99190610d32565b60405180910390fd5b6105fd8383836107d1565b505050565b5f73ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1603610672575f6040517fe602df050000000000000000000000000000000000000000000000000000000081526004016106699190610d32565b60405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036106e2575f6040517f94280d620000000000000000000000000000000000000000000000000000000081526004016106d99190610d32565b60405180910390fd5b8160015f8673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f208190555080156107cb578273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040516107c29190610b8b565b60405180910390a35b50505050565b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610821578060025f8282546108159190610d78565b925050819055506108ef565b5f805f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20549050818110156108aa578381836040517fe450d38c0000000000000000000000000000000000000000000000000000000081526004016108a193929190610cfd565b60405180910390fd5b8181035f808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2081905550505b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610936578060025f8282540392505081905550610980565b805f808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825401925050819055505b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516109dd9190610b8b565b60405180910390a3505050565b5f81519050919050565b5f82825260208201905092915050565b8281835e5f83830152505050565b5f601f19601f8301169050919050565b5f610a2c826109ea565b610a3681856109f4565b9350610a46818560208601610a04565b610a4f81610a12565b840191505092915050565b5f6020820190508181035f830152610a728184610a22565b905092915050565b5f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f610aa782610a7e565b9050919050565b610ab781610a9d565b8114610ac1575f80fd5b50565b5f81359050610ad281610aae565b92915050565b5f819050919050565b610aea81610ad8565b8114610af4575f80fd5b50565b5f81359050610b0581610ae1565b92915050565b5f8060408385031215610b2157610b20610a7a565b5b5f610b2e85828601610ac4565b9250506020610b3f85828601610af7565b9150509250929050565b5f8115159050919050565b610b5d81610b49565b82525050565b5f602082019050610b765f830184610b54565b92915050565b610b8581610ad8565b82525050565b5f602082019050610b9e5f830184610b7c565b92915050565b5f805f60608486031215610bbb57610bba610a7a565b5b5f610bc886828701610ac4565b9350506020610bd986828701610ac4565b9250506040610bea86828701610af7565b9150509250925092565b5f60ff82169050919050565b610c0981610bf4565b82525050565b5f602082019050610c225f830184610c00565b92915050565b5f60208284031215610c3d57610c3c610a7a565b5b5f610c4a84828501610ac4565b91505092915050565b5f8060408385031215610c6957610c68610a7a565b5b5f610c7685828601610ac4565b9250506020610c8785828601610ac4565b9150509250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f6002820490506001821680610cd557607f821691505b602082108103610ce857610ce7610c91565b5b50919050565b610cf781610a9d565b82525050565b5f606082019050610d105f830186610cee565b610d1d6020830185610b7c565b610d2a6040830184610b7c565b949350505050565b5f602082019050610d455f830184610cee565b92915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f610d8282610ad8565b9150610d8d83610ad8565b9250828201905080821115610da557610da4610d4b565b5b9291505056fea2646970667358221220c3f351db99e54e544f5ed663112bb342bbaf6bcf4420976b9dc1d7760cd139c764736f6c634300081a0033'; // Provide actual bytecode here
                // Create contract factory
                const contractFactory = new ethers.ContractFactory(contractABI, contractBytecode, signer);
                // Define values from the form state (token name and symbol)
                const tokenName = state.name; // assuming 'name' is a state field
                const tokenSymbol = state.symbol; // assuming 'symbol' is a state field
                // Deploy contract or send transaction based on form data
                const contract = await contractFactory.deploy(tokenName, tokenSymbol);
                // Wait for transaction to be mined
                await contract.deployTransaction.wait();
                // Set the contract address in the state (or handle response)
                setContractAddress(contract.address);
                alert('Form data processed and contract deployed at: ' + contract.address);
            } catch (error) {
                alert(`Error during processing: ${error.message || error}`);
            } finally {
                setIsLoading(false);
            }
        } else {
            alert('Form is invalid. Please check the fields.');
        }
    }

    const TOKEN_TYPE = [
        {
            name: "HelloKRC20",
            value: "HELLO_KRC20",
        },
        {
            name: "SimpleKRC20",
            value: "SIMPLE_KRC20",
        },
        {
            name: "StandardKRC20",
            value: "STANDARD_KRC20",
        },
        {
            name: "BurnableKRC20",
            value: "BURNABLE_KRC20",
        },
        {
            name: "MintableKRC20",
            value: "MINTBLE_KRC20",
        },
        {
            name: "PausableKRC20",
            value: "PAUSABLE_KRC20",
        },
        {
            name: "CommonKRC20",
            value: "COMMON_KRC20",
        },
        {
            name: "DeflationaryKRC20",
            value: "DEFLATIONARY_KRC20",
        },
        {
            name: "TaxableKRC20",
            value: "TAXABLE_KRC20",
        },
        {
            name: "UnlimitedKRC20",
            value: "UNLIMITED_KRC20",
        },
        {
            name: "AmazingKRC20",
            value: "AMAZING_KRC20",
        },
        {
            name: "PowerfulKRC20",
            value: "POWERFUL_KRC20",
        },
    ];
    const onChange = (name, value) => {
        setState({ ...state, [name]: value });
    };
    useEffect(() => {
        if (state.tokenType === "HELLO_KRC20") {
            setState({
                ...state,
                tokenName: "",
                tokenSymbol: "",
                tokenDecimals: 18,
                initialSupply: 1000,
                maxSupply: 1000,
                burnable: false,
                mintable: false,
                tokenRecover: false,
                deflationary: false,
                taxable: false,
                KRC1363: false,
                supplyType: "10k",
                accessType: "None",
                transferType: "Unstoppable",
                viewSourceCode: true,
                removeCopyright: false,
                isDisabledTokenDecimal: true,
                isDisabledInitialSupply: true,
                isDisabledMaxSupply: true,
            });
        } else if (state.tokenType === "SIMPLE_KRC20") {
            setState({
                ...state,
                tokenName: "",
                tokenSymbol: "",
                tokenDecimals: 18,
                initialSupply: "",
                maxSupply: "",
                burnable: false,
                mintable: false,
                tokenRecover: false,
                deflationary: false,
                taxable: false,
                KRC1363: false,
                supplyType: "Fixed",
                accessType: "None",
                transferType: "Unstoppable",
                viewSourceCode: true,
                removeCopyright: false,
                isDisabledTokenDecimal: true,
                isDisabledInitialSupply: false,
                isDisabledMaxSupply: true,
            });
        } else if (state.tokenType === "STANDARD_KRC20") {
            setState({
                ...state,
                tokenName: "",
                tokenSymbol: "",
                tokenDecimals: 18,
                initialSupply: "",
                maxSupply: "",
                burnable: false,
                mintable: false,
                tokenRecover: false,
                deflationary: false,
                taxable: false,
                KRC1363: false,
                supplyType: "Fixed",
                accessType: "None",
                transferType: "Unstoppable",
                viewSourceCode: true,
                removeCopyright: true,
                isDisabledTokenDecimal: false,
                isDisabledInitialSupply: false,
                isDisabledMaxSupply: true,
            });
        } else if (state.tokenType === "BURNABLE_KRC20") {
            setState({
                ...state,
                tokenName: "",
                tokenSymbol: "",
                tokenDecimals: 18,
                initialSupply: "",
                maxSupply: "",
                burnable: true,
                mintable: false,
                tokenRecover: false,
                deflationary: false,
                taxable: false,
                KRC1363: false,
                supplyType: "Fixed",
                accessType: "None",
                transferType: "Unstoppable",
                viewSourceCode: true,
                removeCopyright: true,
                isDisabledTokenDecimal: false,
                isDisabledInitialSupply: false,
                isDisabledMaxSupply: true,
            });
        } else if (state.tokenType === "MINTBLE_KRC20") {
            setState({
                ...state,
                tokenName: "",
                tokenSymbol: "",
                tokenDecimals: 18,
                initialSupply: "",
                maxSupply: "",
                burnable: false,
                mintable: true,
                tokenRecover: false,
                deflationary: false,
                taxable: false,
                KRC1363: false,
                supplyType: "Capped",
                accessType: "Ownable",
                transferType: "Unstoppable",
                viewSourceCode: true,
                removeCopyright: true,
                isDisabledTokenDecimal: false,
                isDisabledInitialSupply: false,
                isDisabledMaxSupply: true,
            });
        } else if (state.tokenType === "PAUSABLE_KRC20") {
            setState({
                ...state,
                tokenName: "",
                tokenSymbol: "",
                tokenDecimals: 18,
                initialSupply: "",
                maxSupply: "",
                burnable: false,
                mintable: false,
                tokenRecover: false,
                deflationary: false,
                taxable: false,
                KRC1363: false,
                supplyType: "Fixed",
                accessType: "Ownable",
                transferType: "Pausable",
                viewSourceCode: true,
                removeCopyright: true,
                isDisabledTokenDecimal: false,
                isDisabledInitialSupply: false,
                isDisabledMaxSupply: true,
            });
        } else if (state.tokenType === "COMMON_KRC20") {
            setState({
                ...state,
                tokenName: "",
                tokenSymbol: "",
                tokenDecimals: 18,
                initialSupply: "",
                maxSupply: "",
                burnable: true,
                mintable: true,
                tokenRecover: false,
                deflationary: false,
                taxable: false,
                KRC1363: false,
                supplyType: "Capped",
                accessType: "Ownable",
                transferType: "Unstoppable",
                viewSourceCode: true,
                removeCopyright: true,
                isDisabledTokenDecimal: false,
                isDisabledInitialSupply: false,
                isDisabledMaxSupply: false,
            });
        } else if (state.tokenType === "DEFLATIONARY_KRC20") {
            setState({
                ...state,
                tokenName: "",
                tokenSymbol: "",
                tokenDecimals: 18,
                initialSupply: "",
                maxSupply: "",
                burnable: false,
                mintable: false,
                tokenRecover: false,
                deflationary: true,
                taxable: false,
                KRC1363: false,
                supplyType: "Fixed",
                accessType: "Ownable",
                transferType: "Unstoppable",
                viewSourceCode: true,
                removeCopyright: true,
                isDisabledTokenDecimal: false,
                isDisabledInitialSupply: false,
                isDisabledMaxSupply: true,
                burnFee: "",
            });
        } else if (state.tokenType === "TAXABLE_KRC20") {
            setState({
                ...state,
                tokenName: "",
                tokenSymbol: "",
                tokenDecimals: 18,
                initialSupply: "",
                maxSupply: "",
                burnable: false,
                mintable: false,
                tokenRecover: false,
                deflationary: false,
                taxable: true,
                KRC1363: false,
                supplyType: "Fixed",
                accessType: "Ownable",
                transferType: "Unstoppable",
                viewSourceCode: true,
                removeCopyright: true,
                isDisabledTokenDecimal: false,
                isDisabledInitialSupply: false,
                isDisabledMaxSupply: true,
                burnFee: "",
                taxFee: "",
            });
        } else if (state.tokenType === "UNLIMITED_KRC20") {
            setState({
                ...state,
                tokenName: "",
                tokenSymbol: "",
                tokenDecimals: 18,
                initialSupply: "",
                maxSupply: "",
                burnable: true,
                mintable: true,
                tokenRecover: false,
                deflationary: false,
                taxable: false,
                KRC1363: false,
                supplyType: "Unlimited",
                accessType: "Role Based",
                transferType: "Unstoppable",
                viewSourceCode: true,
                removeCopyright: true,
                isDisabledTokenDecimal: false,
                isDisabledInitialSupply: false,
                isDisabledMaxSupply: true,
            });
        } else if (state.tokenType === "AMAZING_KRC20") {
            setState({
                ...state,
                tokenName: "",
                tokenSymbol: "",
                tokenDecimals: 18,
                initialSupply: "",
                maxSupply: "",
                burnable: true,
                mintable: true,
                tokenRecover: true,
                deflationary: false,
                taxable: false,
                KRC1363: true,
                supplyType: "Unlimited",
                accessType: "Ownable",
                transferType: "Unstoppable",
                viewSourceCode: true,
                removeCopyright: true,
                isDisabledTokenDecimal: false,
                isDisabledInitialSupply: false,
                isDisabledMaxSupply: true,
            });
        } else if (state.tokenType === "POWERFUL_KRC20") {
            setState({
                ...state,
                tokenName: "",
                tokenSymbol: "",
                tokenDecimals: 18,
                initialSupply: "",
                maxSupply: "",
                burnable: true,
                mintable: true,
                tokenRecover: true,
                deflationary: false,
                taxable: false,
                KRC1363: true,
                supplyType: "Capped",
                accessType: "Role Based",
                transferType: "Unstoppable",
                viewSourceCode: true,
                removeCopyright: true,
                isDisabledTokenDecimal: false,
                isDisabledInitialSupply: false,
                isDisabledMaxSupply: true,
            });
        }
    }, [state.tokenType]);

    const [account, setAccount] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");

    const connectMetaMask = async () => {
        if (window.ethereum) {
            try {
                // Request account access
                const accounts = await window.ethereum.request({
                    method: "eth_requestAccounts",
                });
                // Set the first account
                setAccount(accounts[0]);
                setErrorMessage("");
            } catch (error) {
                setErrorMessage("Failed to connect to MetaMask.");
            }
        } else {
            setErrorMessage("MetaMask is not installed.");
        }
    };


    return (
        <div
            className={clsx(
                !(mobileWidth || tabletWidth) && "pt-5 pb-5",
                (mobileWidth || tabletWidth) && "pt-3 pb-3"
            )}
        >
            <Container maxWidth={clsx(!mobileWidth && "lg", mobileWidth && "sm")}>
                <div>
                    {account ? (
                        <div className="alert alert-success p-4" role="alert">
                            <Typography variant="h6">Connected</Typography>
                            <Typography variant="body2" className="pt-2">
                                Connected to MetaMask account: {account}
                            </Typography>
                        </div>
                    ) : (
                        <div className="alert alert-danger p-4" role="alert">
                            <Typography variant="h6">Alert</Typography>
                            <Typography variant="body2" className="pt-2">
                                To use this app, please install{" "}
                                <a
                                    href="https://metamask.io/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    MetaMask
                                </a>
                                . Use any other wallet at your own risk.
                            </Typography>
                            <button
                                onClick={connectMetaMask}
                                className="btn btn-primary mt-3"
                            >
                                Connect MetaMask
                            </button>
                            {errorMessage && (
                                <Typography variant="body2" color="error" className="pt-2">
                                    {errorMessage}
                                </Typography>
                            )}
                        </div>
                    )}
                </div>
                <div className="pt-2 pb-2">
                    <Typography
                        className={clsx(classes.textStyle, "pt-2 pb-2")}
                        variant={clsx(
                            !(mobileWidth || tabletWidth) && "h5",
                            tabletWidth && "subtitle20M6",
                            mobileWidth && "subtitle"
                        )}
                    >
                        {title ? title : ""}
                    </Typography>
                    {label ? (
                        <Typography
                            variant={clsx(
                                !(mobileWidth || tabletWidth) && "body2",
                                (mobileWidth || tabletWidth) && "body2"
                            )}
                            className={clsx(
                                classes.textStyle,
                                "mt-3 pt-2 text-transform-none"
                            )}
                        >
                            {label}
                        </Typography>
                    ) : null}
                    <Typography
                        variant={clsx(
                            !(mobileWidth || tabletWidth) && "body2",
                            (mobileWidth || tabletWidth) && "body2"
                        )}
                        className={clsx(classes.textStyle, "pt-2")}
                    >
                        {description ? description : ""}
                    </Typography>
                </div>
                <Grid
                    container
                    rowSpacing={2}
                    spacing={5}
                    className={clsx(
                        !mobileWidth && "mt-4 mb-4",
                        mobileWidth && "mt-2 mb-2"
                    )}
                >
                    <Grid
                        item
                        xs={12}
                        sm={12}
                        md={12}
                        lg={4}
                        className="d-flex justify-content-start"
                    >
                        <MaterialSelectDropdown
                            data={TOKEN_TYPE}
                            value={state.tokenType}
                            onChange={(e) => onChange("tokenType", e.target.value)}
                            topAdornment="Token type"
                            message="Choose a Token Type."
                            showSteric={true}
                        />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={12}
                        md={12}
                        lg={4}
                        className="d-flex justify-content-start"
                    >
                        <MaterialSelectDropdown
                            data={KAICHAIN_TESTNET}
                            value={state.network}
                            onChange={(e) => onChange("network", e.target.value)}
                            topAdornment="NetworkWork"
                            error={
                                !state.validationResult.isValidNetwork
                                    ? "Network is required"
                                    : ""
                            }
                            message="Choose a network."
                            showSteric={true}
                        />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={12}
                        md={12}
                        lg={4}
                        className="d-flex justify-content-start"
                    >
                        <SiteLabelTextField
                            topAdornment="Price"
                            validationType="NUMERIC"
                            placeholder="0.03 KEC"
                            value={state.price}
                            onChange={(e) => onChange("price", e.target.value)}
                            error="Price is required"
                            // error={!state.validationResult.isValidEmail}
                            message="10k, Fixed, Unlimited, Capped"
                            disabled={true}
                        />
                    </Grid>
                </Grid>
                <Divider variant="fullWidth" light={true} orientation="horizontal" />
                <Grid
                    container
                    rowSpacing={2}
                    spacing={5}
                    className={clsx(
                        !mobileWidth && "mt-2 mb-2",
                        mobileWidth && "mt-2 mb-2"
                    )}
                >
                    <Grid
                        item
                        xs={12}
                        sm={12}
                        md={12}
                        lg={4}
                        className="d-flex flex-column justify-content-start"
                    >
                        <div className="mt-2 mb-2">
                            <SiteLabelTextField
                                topAdornment="Token name"
                                placeholder="e.g.My Token"
                                showSteric={true}
                                value={state.tokenName}
                                onChange={(e) => onChange("tokenName", e.target.value)}
                                error={
                                    !state.validationResult.isValidTokenName
                                        ? "The token name field is required"
                                        : ""
                                }
                                message="A custom name for the token."
                            />
                        </div>
                        <div className="mt-2 mb-2">
                            <SiteLabelTextField
                                topAdornment="Token Symbol"
                                placeholder="e.g.MYT"
                                value={state.tokenSymbol}
                                showSteric={true}
                                onChange={(e) => onChange("tokenSymbol", e.target.value)}
                                error={
                                    !state.validationResult.isValidTokenSymbol
                                        ? "The token symbol field is required"
                                        : ""
                                }
                                message="A custom symbol for the token (usually 3-5 chars)."
                            />
                        </div>
                        <div className="mt-2 mb-2">
                            <SiteLabelTextField
                                topAdornment="Token decimals"
                                placeholder="18"
                                showSteric={true}
                                value={state.tokenDecimals}
                                validationType="NUMERIC"
                                onChange={(e) => onChange("tokenDecimals", e.target.value)}
                                error={
                                    !state.validationResult.isValidTokenDecimals
                                        ? "The token decimal field is required"
                                        : ""
                                }
                                disabled={state.isDisabledTokenDecimal}
                                message="The decimal precision for the token (usually 18)."
                            />
                        </div>
                        <div className="mt-2 mb-2">
                            <SiteLabelTextField
                                topAdornment="Initial Supply"
                                showSteric={true}
                                placeholder="e.g. 21000000"
                                value={state.initialSupply}
                                validationType="NUMERIC"
                                onChange={(e) => onChange("initialSupply", e.target.value)}
                                error={
                                    !state.validationResult.isValidInitialSupply
                                        ? "The token initial supply field may only contain numeric characters"
                                        : ""
                                }
                                disabled={state.isDisabledInitialSupply}
                                message="The initial number of available tokens that will be created in your account."
                            />
                        </div>
                        {state.tokenType === "UNLIMITED_KRC20" ||
                            state.tokenType === "AMAZING_KRC20" ||
                            state.tokenType === "POWERFUL_KRC20" ? null : (
                            <div className="mt-2 mb-2">
                                <SiteLabelTextField
                                    showSteric={true}
                                    topAdornment="Max Supply"
                                    placeholder="e.g. 21000000"
                                    value={
                                        state.tokenType === "COMMON_KRC20"
                                            ? state.maxSupply
                                            : state.initialSupply
                                    }
                                    onChange={(e) => onChange("maxSupply", e.target.value)}
                                    error={
                                        !state.validationResult.isValidMaxSupply
                                            ? "The token max supply field may only contain numeric characters"
                                            : ""
                                    }
                                    message="The maximum number of tokens available."
                                    disabled={state.isDisabledMaxSupply}
                                />
                            </div>
                        )}
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={12}
                        md={12}
                        lg={4}
                        className="d-flex flex-column justify-content-start"
                    >
                        <div className="mt-1 mb-1">
                            <SwitchButton
                                disabled={true}
                                topAdornment="Features"
                                value={state.burnable}
                                onChange={(e) => onChange("burnable", e.target.checked)}
                                // error='The token name field is required'
                                message="The Token can be manually burned to reduce circulating supply."
                                label="Burnable"
                            />
                        </div>
                        <div className="mt-1 mb-1">
                            <SwitchButton
                                disabled={state.tokenType === "MINTBLE_KRC20" ? false : true}
                                value={state.mintable}
                                onChange={(e) => onChange("mintable", e.target.checked)}
                                // error='The token name field is required'
                                message="Owner or accounts with minting permission will be able to generate new tokens, up to token max supply, by minting them."
                                label="Mintable"
                            />
                        </div>
                        <div className="mt-1 mb-1">
                            <SwitchButton
                                disabled={true}
                                value={state.deflationary}
                                onChange={(e) => onChange("deflationary", e.target.checked)}
                                // error='The token name field is required'
                                message="Token supply will reduce over time. For each transaction a fee will be automatically burned. Owner can exclude some accounts from the deflation mechanism."
                                label="Deflationary"
                            />
                        </div>
                        {state.tokenType === "DEFLATIONARY_KRC20" ? (
                            <div className="mt-1 mb-1">
                                <SiteLabelTextField
                                    topAdornment="Burn Fee (per mille)"
                                    placeholder="e.g. 50"
                                    value={state.burnFee}
                                    showSteric={true}
                                    onChange={(e) => onChange("burnFee", e.target.value)}
                                    message="To give greater accuracy enter an amount per mille so, for example, to set a 5% burn fee, enter 50. Owner can change this later. By default owner is excluded from burn fee."
                                    // disabled={true}
                                    endAdornment={<Typography>%</Typography>}
                                    error={
                                        !state.validationResult.isValidBurnFee
                                            ? "The burn fee field is required"
                                            : ""
                                    }
                                />
                            </div>
                        ) : null}
                        <div className="mt-1 mb-1">
                            <SwitchButton
                                disabled={true}
                                value={state.taxable}
                                onChange={(e) => onChange("taxable", e.target.checked)}
                                message="A tax fee will be added to transfers. For each transaction a fee will be automatically sent to a predefined address. Owner can exclude some accounts from the taxation mechanism."
                                label="Taxable"
                            />
                        </div>
                        {state.tokenType === "TAXABLE_KRC20" ? (
                            <div>
                                <div className="mt-1 mb-1">
                                    <SiteLabelTextField
                                        topAdornment="Tax Fee (per mille)"
                                        showSteric={true}
                                        placeholder="e.g. 50"
                                        value={state.taxFee}
                                        onChange={(e) => onChange("taxFee", e.target.value)}
                                        message="To give greater accuracy enter an amount per mille so, for example, to set a 5% tax fee, enter 50. Owner can change this later. By default owner is excluded from tax fee."
                                        endAdornment={<Typography>%</Typography>}
                                        error={
                                            !state.validationResult.isValidTaxFee
                                                ? "The Tax fee field is required"
                                                : ""
                                        }
                                    />
                                </div>
                                <div className="mt-1 mb-1">
                                    <SiteLabelTextField
                                        topAdornment="Tax Address "
                                        showSteric={true}
                                        placeholder="0x123456789..."
                                        value={state.taxAddress}
                                        onChange={(e) => onChange("taxAddress", e.target.value)}
                                        message="The address where tax fees will be collected. Owner can change this later. By default this address is excluded from tax fee."
                                        endAdornment={<Typography>%</Typography>}
                                        error={
                                            !state.validationResult.isValidTaxAddress
                                                ? "The Tax Address field is required"
                                                : ""
                                        }
                                    />
                                </div>
                            </div>
                        ) : null}
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={12}
                        md={12}
                        lg={4}
                        className="d-flex flex-column justify-content-start"
                    >
                        <div className="mt-2 mb-2">
                            <SiteLabelTextField
                                topAdornment="Supply Type"
                                placeholder="Fixed"
                                value={state.supplyType}
                                onChange={(e) => onChange("supplyType", e.target.value)}
                                message="10k, Fixed, Unlimited, Capped"
                                disabled={true}
                                endAdornment={
                                    <img
                                        src={`${process.env.PUBLIC_URL}/assets/images/unfold_more_arrows.svg`}
                                        width="20px"
                                    />
                                }
                            />
                        </div>
                        <div className="mt-2 mb-2">
                            <SiteLabelTextField
                                topAdornment="Access Type"
                                placeholder="None"
                                value={state.accessType}
                                onChange={(e) => onChange("accessType", e.target.value)}
                                endAdornment={
                                    <img
                                        src={`${process.env.PUBLIC_URL}/assets/images/unfold_more_arrows.svg`}
                                        width="20px"
                                    />
                                }
                                disabled={true}
                                message="None, Ownable, Role Based"
                            />
                        </div>
                        <div className="mt-1 mb-1">
                            <SwitchButton
                                disabled={true}
                                value={state.viewSourceCode}
                                onChange={(e) => onChange("viewSourceCode", e.target.checked)}
                                message="Token Source Code will be automatically verified on Etherscan. Only available on Mainnet."
                                label="Verified Source Code"
                            />
                        </div>
                        <Box className="d-flex justify-content-center mt-2 mb-2">
                            <TermsAndConditionSelectionDialog
                                onChange={(e) => onChange("tokenRecover", e.target.checked)}
                                {...props}
                            />
                        </Box>
                        <Button
                            onClick={SendFormData}
                            variant="contained"
                            color="primary"
                            className="pt-3 pb-3 mt-2"
                        >
                            Next
                        </Button>
                    </Grid>
                </Grid>
                {/* {<div className="pt-5 pb-4 text-center">
                    <Button className='pt-3 pb-3 pl-5 pr-5' variant='outlined' color='secondary'>
                        Get started
                    </Button>
                </div>} */}
            </Container>
        </div>
    );
};
export default CreateTokenForm;
