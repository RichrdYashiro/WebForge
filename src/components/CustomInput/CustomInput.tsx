import { TextInput, type TextInputProps, Box, Text } from "@mantine/core";
import { forwardRef } from "react";
type CustomInputProps = TextInputProps;

export const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
  ({ error, ...props }, ref) => {
    return (
      <TextInput
        ref={ref}
        {...props}
        error={
          error ? (
            <Box className="flex w-full mt-1.5">
              <Box
                className="bg-white px-2 py-1 rounded-sm shadow-md"
                style={{ display: "inline-flex", alignItems: "center" }}
              >
                <Text
                  component="span"
                  style={{
                    color: "black",
                    fontSize: "12px",
                    letterSpacing: "0.1em",
                    lineHeight: 1,
                    whiteSpace: "nowrap",
                  }}
                >
                  {error}
                </Text>
              </Box>
            </Box>
          ) : null
        }
        styles={{
          input: {
            borderColor: error ? "#ff6b6b" : "rgba(255, 255, 255, 0.05)",
            backgroundColor: error
              ? "rgba(255, 107, 107, 0.05)"
              : "rgba(255, 255, 255, 0.05)",
            color: error ? "#ffcfcf" : "white",
            borderRadius: "8px",
            transition: "all 0.2s ease",
            "&:focus": {
              borderColor: error ? "#ff6b6b" : "#4dabf7",
            },
          },
          label: {
            color: "white",
            fontSize: "10px",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            marginBottom: "4px",
            marginLeft: "4px",
          },
        }}
        errorProps={{ variant: "clean" }}
      />
    );
  },
);
