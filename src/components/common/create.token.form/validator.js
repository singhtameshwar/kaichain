import { regex } from "../../../components/common/utill/regex";

export function isFormDetails(data) {
  const isValidTokenName = regex.isNotEmpty.test(data.tokenName);
  const isValidTokenSymbol = regex.isNotEmpty.test(data.tokenSymbol);
  const isValidTokenDecimals = regex.isNotEmpty.test(data.tokenDecimals);
  const isValidInitialSupply = regex.isNotEmpty.test(data.initialSupply);
  const isValidMaxSupply = (data.tokenType === 'UNLIMITED_KRC20' || data.tokenType === 'AMAZING_KRC20' || data.tokenType === 'POWERFUL_KRC20') ? true : regex.isNotEmpty.test(data.maxSupply);
  const isValidBurnFee = data.tokenType === 'DEFLATIONARY_KRC20' ? regex.isNotEmpty.test(data.burnFee) : true;
  const isValidTaxFee = data.tokenType === 'TAXABLE_KRC20' ? regex.isNotEmpty.test(data.taxFee) : true;
  const isValidTaxAddress = data.tokenType === 'TAXABLE_KRC20' ? regex.isNotEmpty.test(data.taxAddress) : true;

  return {
    isValidTokenName: isValidTokenName,
    isValidTokenSymbol: isValidTokenSymbol,
    isValidTokenDecimals: isValidTokenDecimals,
    isValidInitialSupply: isValidInitialSupply,
    isValidMaxSupply: isValidMaxSupply,
    isValidBurnFee: isValidBurnFee,
    isValidTaxFee: isValidTaxFee,
    isValidTaxAddress: isValidTaxAddress,
    allValid: isValidTokenName && isValidTokenSymbol && isValidTokenDecimals
      && isValidInitialSupply && isValidMaxSupply && isValidBurnFee && isValidTaxFee && isValidTaxAddress
  };
}