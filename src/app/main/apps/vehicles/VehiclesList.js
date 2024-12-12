import { motion } from 'framer-motion';
import FuseUtils from '@fuse/utils';
import Typography from '@material-ui/core/Typography';
import { useMemo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, IconButton } from '@material-ui/core';
import VehiclesTable from './VehiclesTable';
import {
  // openEditContactDialog,
  openNewVehicleDialog,
  openEditVehicleDialog,
  selectVehicles,
  removeVehicle
} from './store/vehiclesSlice';

const formatData = vehicles =>
  vehicles.map(vehicle => {
    return {
      ...vehicle
    };
  });

function VehiclesList(props) {
  const dispatch = useDispatch();
  const vehicles = useSelector(selectVehicles);

  const searchText = useSelector(({ vehiclesApp }) => vehiclesApp.vehicles.searchText);

  const [filteredData, setFilteredData] = useState(null);

  const columns = useMemo(
    () => [
      {
        Header: 'Active',
        accessor: 'active',
        className: 'font-medium',
        sortable: true,
        Cell: ({ row }) => {
          return row.original.active ? "True" : "False";
        }
      },
      {
        Header: 'Model',
        accessor: 'model',
        className: 'font-medium',
        sortable: true
      },
      {
        Header: 'Plate Number',
        accessor: 'plate_number',
        sortable: true
      },
      {
        Header: 'Engine number',
        accessor: 'engine_number',
        sortable: true
      },
      {
        Header: 'Year',
        accessor: row => row.manufacture_year.split('T')[0],
        sortable: true
      },
      {
        Header: 'Issues',
        accessor: row => row.issues.length,
        sortable: true
      },
      {
        Header: 'Actions',
        accessor: 'actions',
        sortable: true,
        Cell: ({ row }) => (
          <div className="flex gap-2">
            <button
              type="button"
              className="px-4 py-2 bg-blue-500 text-white rounded"
              onClick={() => dispatch(openEditVehicleDialog(row.original))}
            >
              Edit
            </button>
            <button
              type="button"
              className="px-4 py-2 bg-red-500 text-white rounded"
              onClick={() => dispatch(removeVehicle(row.original.id))}
            >
              Delete
            </button>
          </div>
        )
      }
    ],
    [dispatch, vehicles]
  );

  const handleEdit = rowData => {
    console.log('Edit clicked for row:', rowData);
    // Add logic to open a modal or navigate to an edit page
  };
  const handleDelete = rowData => {
    console.log('Delete clicked for row:', rowData);
    // Add logic to delete the row
  };

  useEffect(() => {
    function getFilteredArray(entities, _searchText) {
      if (_searchText.length === 0) {
        return vehicles;
      }
      return FuseUtils.filterArrayByString(vehicles, _searchText);
    }

    if (vehicles) {
      setFilteredData(getFilteredArray(vehicles, searchText));
    }
  }, [vehicles, searchText]);

  if (!filteredData) {
    return null;
  }

  if (filteredData.length === 0) {
    return (
      <div className="flex flex-1 items-center justify-center h-full">
        <Typography color="textSecondary" variant="h5">
          There are no vehicles!
        </Typography>
      </div>
    );
  }

  const formattedData = formatData(filteredData);

  return (
    <>
      <Button style={{ width: 200, backgroundColor: 'grey' }} onClick={() => dispatch(openNewVehicleDialog())}>
        Add new
      </Button>
      <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}>
        <VehiclesTable
          columns={columns}
          data={formattedData}
          // onRowClick={(ev, row) => {
          //   if (row) {
          //     dispatch(openEditContactDialog(row.original));
          //   }
          // }}
        />
      </motion.div>
    </>
  );
}

export default VehiclesList;
