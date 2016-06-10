
contract SampleContract {
	mapping (address => string) data;

	function SampleContract() {

	}

	function setData(string newData) returns(bool) {
		data[msg.sender] = newData;
		return true;
	}
	function getData() constant returns(string) {
  	return data[msg.sender];
	}
}
