// ** React Imports
import { ChangeEvent, useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import MenuItem from '@mui/material/MenuItem'
import Checkbox from '@mui/material/Checkbox'
import ListItemText from '@mui/material/ListItemText'
import { SelectChangeEvent } from '@mui/material/Select'

// ** Custom Component Import
import CustomChip from 'src/@core/components/mui/chip'
import CustomTextField from 'src/@core/components/mui/text-field'

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      width: 250,
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP
    }
  }
}

const names = [
  'Planificación y Presupuesto',
  'Normas, Disciplina y Ética',
  'Proyección Social y Extensión',
  'Grados y Títulos',
  'Bienestar Universitario',
  'Laboratorios',
  'Cultura y Deportes',
  'Tutorías',
  'Seguimiento al Estudiante',
  'Seguimiento al Egresado',
  'Convenios'
]

const SelectMultiple = () => {
  // ** State
  const [personName, setPersonName] = useState<string[]>([])
  const [personNameNative, setPersonNameNative] = useState<string[]>([])

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    setPersonName(event.target.value as string[])
  }

  const handleChangeMultipleNative = (event: ChangeEvent<HTMLSelectElement>) => {
    const { options } = event.target
    const value: string[] = []
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value)
      }
    }
    setPersonNameNative(value)
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        '& > *': { maxWidth: 500, mt: theme => `${theme.spacing(4)} !important` }
      }}
    >
      <CustomTextField
        select
        fullWidth
        label='Comisiones'
        id='select-multiple-chip'
        SelectProps={{
          MenuProps,
          multiple: true,
          value: personName,
          onChange: e => handleChange(e),
          renderValue: selected => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
              {(selected as unknown as string[]).map(value => (
                <CustomChip key={value} label={value} sx={{ m: 0.75 }} skin='light' color='primary' />
              ))}
            </Box>
          )
        }}
      >
        {names.map(name => (
          <MenuItem key={name} value={name}>
            {name}
          </MenuItem>
        ))}
      </CustomTextField>
    </Box>
  )
}

export default SelectMultiple
