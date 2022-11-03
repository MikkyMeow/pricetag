import { Autocomplete, Grid, TextField } from "@mui/material";
import { currencies, currenciesData, mockObj } from "common/mock";
import { useState, useEffect } from "react";

// const axiosOptions = {
//   method: "GET",
//   url: "https://openexchangerates.org/api/latest.json",
//   params: {
//     app_id: "2b35e2eef4f94bd79ff49d16952e5ef5",
//   },
// };

// axios
//   .request(axiosOptions)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });

type TRates = { [key: string]: number };

export const Rates = () => {
  const rateValues: TRates = mockObj.rates;
  const [firstRate, setFirstRate] = useState("");
  const [secondRate, setSecondRate] = useState("");
  const [value, setValue] = useState(0);
  const [difference, setDifference] = useState(0);
  const [result, setResult] = useState(0);

  useEffect(() => {
    if (firstRate && secondRate) {
      setDifference(rateValues[secondRate] / rateValues[firstRate]);
    }
  }, [firstRate, secondRate, rateValues]);

  useEffect(() => {
    setResult(value * difference);
  }, [value, difference]);

  return (
    <>
      <h3>Exchange rates</h3>
      {Boolean(difference) && (
        <p>
          1 {currenciesData[firstRate]} equals {difference.toFixed(2) + " "}
          {currenciesData[secondRate]}
        </p>
      )}
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Autocomplete
            options={currencies}
            onChange={(_, option) =>
              option?.value && setFirstRate(option?.value)
            }
            getOptionLabel={(option) => `${option.value}: ${option.label}`}
            renderInput={(params) => <TextField {...params} label="Currency" />}
          />
        </Grid>
        <Grid item xs={6}>
          <Autocomplete
            options={currencies}
            onChange={(_, option) =>
              option?.value && setSecondRate(option?.value)
            }
            getOptionLabel={(option) => `${option.value}: ${option.label}`}
            renderInput={(params) => <TextField {...params} label="Currency" />}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            value={value}
            fullWidth
            disabled={!difference}
            onChange={(e) =>
              setValue(isNaN(+e.target.value) ? value : +e.target.value)
            }
          />
        </Grid>
        <Grid item xs={6}>
          <TextField value={`${result.toFixed(2)} ${secondRate}`} fullWidth />
        </Grid>
      </Grid>
    </>
  );
};
