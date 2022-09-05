import { useLayoutEffect } from "react";
import { Text } from "react-native";

export default ManageExpense = ({ route, navigation }) => {
  const editedExpenseId = route.params?.expenseId;
  /* Checking if the editedExpenseId is truthy or falsy. */
  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  return <Text>ManageExpenses Screen</Text>;
};
