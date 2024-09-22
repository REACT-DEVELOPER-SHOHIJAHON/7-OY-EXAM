import { BiLogOut } from "react-icons/bi"; 
import React from 'react';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Button, Modal, notification } from 'antd'; 
import { logOut } from '../../redux/slice/authSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const { confirm } = Modal;

const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logOut());
    navigate('/');
    notification.success({ message: 'Chiqish muvaffaqiyatli' });
  };

  const showConfirm = () => {
    confirm({
      icon: <ExclamationCircleOutlined />,
      content: 'Hisobingizdan chiqmoqchimisiz?',
      onOk() {
        handleLogout();
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  };

  return (
    <Button 
    danger 
    type="primary" 
    onClick={showConfirm} 
    className="bg-blue-600 hover:bg-blue-700 text-white text-lg transition-colors w-full flex items-center p-2 rounded"
>
    <BiLogOut size={24} /> LOG OUT
</Button>

  );
};

export default App;
